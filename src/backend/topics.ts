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
    const llmResult: string = await getLlmData(urls, prompt);
    console.log(llmResult);
    const parsedResult: FlashcardResponse[] = parseLllmResult(llmResult, category);
    return parsedResult;
};

function getPromptByCategory(name: string, category: DeckCategory): string {
    let prompt: string = "";
    switch(category) {
        case DeckCategory.QNA:
            prompt = `Get me question and answers on ${name}`;
            break;
        case DeckCategory.COLLECTION:
            prompt = `Get me a collection of flashcards on ${name}`;
            break;
        case DeckCategory.INSTRUCTION:
            prompt = `I need step by step instructions to ${name}`;
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

async function getLlmData(urls: string[], prompt: string): Promise<any> {
    const llmCaller = new LLMCaller();
    const bard1Context  = {
        context:
          `As a smart flaschard generator with extensive knowledge in flashcard making, your task is to create a deck of flashcards depending on user topic. 
          Each flashcard has 3 components to it, a title, an image url that can be renderd, and a description. You need to give 10-15 flascards. 
          Further there are 3 categories of flashcards as follows: 
          1 Question answer based: These flash cards have question in their title, an image and answer as their description. 
          2 Collection based: These can be collection of words, or other objects, the title is the object name, there is an image of the object, and the description has a couple of lines of the object.
          3 Instruction based: These cards where you need to generate step by step instruciton, here the title is the step heading, then there is a visual representation of the step if possible, then in the description there needs to be details on how to carry out that step. 
           If an relatable image is not available please send an empty string. Further you need to give proper https urls for images that can be rendered in img tag. 
           The output format needs to be as follows: title1|img1|desc1~title2|img2|desc2..... Use urls given in the context to fetch data
           Also there are set of urls that you need to use as knowledge base to generate these flash cards. The url are as follows:`,
      };
    bard1Context.context += "\n" + urls.map((url) => {
        return encodeURIComponent(url) + "\n";
    });
    const bardExample = getLlmExample();
    const bardMessage = getLlmMessage(prompt);
    try {
        const result = await llmCaller.sendPrompt({context: bard1Context.context, examples: bardExample, messages: [bardMessage]});
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
    let result: FlashcardResponse[] = [];
    const rows = llmResult.split("\n");
    for (const line of rows) {
        if(!line.includes("|"))continue;
        const cardParts = line.split("|");
        console.log(cardParts);
        const title = cardParts[1];
        const image = cardParts.length > 4 ? cardParts[2]: "";
        const description = cardParts.length > 4 ?cardParts[3]: cardParts[2];
        result.push({title, image, description})
    }
    console.log(result);
    result.shift();
    result.shift();
    return result;
}

function parseInstructions(llmResult: string) {
    let result: FlashcardResponse[] = [];
    const lines = llmResult.split('\n');

  let currentTitle = '';
  let currentDescription = '';

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
      // Found a title line
      if (currentTitle && currentDescription) {
        result.push({ title: currentTitle, description: currentDescription });
      }
      currentTitle = trimmedLine.substring(2, trimmedLine.length - 2).trim();
      currentDescription = '';
    } else if (currentTitle) {
      // Add line to description
      if (currentDescription) {
        currentDescription += '\n';
      }
      currentDescription += trimmedLine;
    }
  }

  // Add the last instruction
  if (currentTitle && currentDescription) {
    result.push({ title: currentTitle, image: "", description: currentDescription });
  }

  return result;
}

function parseQna(llmResult: string) {
    let result: FlashcardResponse[] = [];
    const regex = /(\d+\.\s.*?)(?=\d+\.|\z)/gs;

    let match;

    while ((match = regex.exec(llmResult)) !== null) {
        const [fullMatch, questionAndAnswer] = match;
        const [question, answer] = questionAndAnswer.split('\nAnswer: ');
    
        result.push({ title: question.trim(), image: "", description: answer.trim() });
    }

    console.log(result);
    return result;
}