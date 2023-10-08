import { DeckCategory } from '../types/type';
import { MetaphorResult } from './types';
import MetaphorCaller from './MetaphorCaller';
import LLMCaller from './LLMCaller';
import { getLlmExample, getLlmMessage } from './utils';
import type { FlashcardResponse } from '../types/type';

export async function getTopicList(name: string, category: DeckCategory): Promise<FlashcardResponse[]> {
    let metaphorResult: MetaphorResult[] = [];
    let prompt = getPromptByCategory(name, category);
    if(prompt === "") return [];
    metaphorResult = await getMetaphorResult(prompt);
    console.log(metaphorResult);
    const urls: string[] = metaphorResult.map((result) => result.url);
    const llmResult: string = await getLlmData(urls, prompt, category);
    console.log(llmResult);
    const parsedResult: FlashcardResponse[] = parseLllmResult(llmResult, category);
    return parsedResult;
};

function getPromptByCategory(name: string, category: DeckCategory): string {
    let prompt: string = "";
    switch(category) {
        case DeckCategory.QNA:
            prompt = `Get me flashcards for questions and answers on ${name}`;
            break;
        case DeckCategory.COLLECTION:
            prompt = `Get me a collection of flashcards on ${name}`;
            break;
        case DeckCategory.INSTRUCTION:
            prompt = `I need step-by-step instructions to ${name}`;
            break;
        case DeckCategory.OTHER:
            break;
    }
    return prompt;
}
  
async function getMetaphorResult(prompt: string): Promise<MetaphorResult[]> {
    const metaphor = new MetaphorCaller();
    const response = await metaphor.getResults(prompt);
    return response.results;
}

async function getLlmData(urls: string[], prompt: string, category: DeckCategory): Promise<any> {
    const llmCaller = new LLMCaller();
    let bardPrompt  = 
        `Generate output for different types of user queries by strictly following the template given in the examples. Also, take into consideration the category of the query to generate the response. The output should have proper separators, as shown in the example to parse the outpu.\n`;
    bardPrompt = getLlmExample(bardPrompt);
    bardPrompt = getLlmMessage(bardPrompt, prompt, category);
    bardPrompt += "\nUse the following urls as your knowldege base:\n";
    bardPrompt += urls.map((url) => {
        return encodeURIComponent(url) + "\n";
    });
    console.log(bardPrompt);
    try {
        const result = await llmCaller.sendPrompt({text: bardPrompt});
        console.log(result);
        return result;
    } catch(error) {
        console.log(error)
    }
    return Promise.resolve();
}

function parseLllmResult(llmResult:string, category: DeckCategory): FlashcardResponse[] {
    let result: FlashcardResponse[] = [];

    switch(category) {
        case DeckCategory.QNA:
            result = parseQna(llmResult);
            break;
        case DeckCategory.COLLECTION:
            result = parseCollections(llmResult);
            break;
        case DeckCategory.INSTRUCTION:
            result = parseInstructions(llmResult);
            break;
        default:
            break;
    }
    return result;
    
}

function parseCollections(llmResult: string) {
    const pairs:string[] = llmResult.split('~'); // Split by '~' to separate title-description pairs

    const result:FlashcardResponse[] = pairs.map((pair) => {
    const [title, description] = pair.split('|'); // Split each pair by '|'
    return {
      title: title.trim(),
      description: description.trim(),
    };
  });

  return result;
}

function parseInstructions(llmResult: string) {
    const titleDescriptionRegex = /\*\*(.*?)\*\*([\s\S]*?)(?=\*\*|\n*$)/g;
  const matches = [...llmResult.matchAll(titleDescriptionRegex)];

  const result = matches.map((match) => {
    const title = match[1].trim();
    const description = match[2].trim();
    return {
      title,
      description,
    };
  });

  return result;
}

function parseQna(llmResult: string) {
    const questionAnswerPairs = llmResult.split('~'); // Split by '~' to separate question-answer pairs
    const result:FlashcardResponse[] = [];

    questionAnswerPairs.forEach((pair) => {
        const parts = pair.split('|'); // Split each pair by '|'
        const questionPart = parts[0].trim(); // Get the question part
        const answerPart = parts[1].trim(); // Get the answer part

        const questionMatch = questionPart.match(/^(Question|Q) (\d+)*: (.+)$/);
        if (questionMatch) {
            const questionText = questionMatch[2];

        const answerMatch = answerPart.match(/^(Answer|a): (.+)$/);
        if (answerMatch) {
            const answerText = answerMatch[1];

        result.push({
          title: questionText,
          description: answerText,
        });
      }
    }
  });

  return result;
}