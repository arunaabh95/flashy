/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DeckCategory } from '../types/type';

const LINE_SEPARATOR = "|";
export const LISTIT_PROMPT_COMPONENTS = {
    prefixes: [
      'Get me flashcards for questions and answers on Biology exam',
      'Get me a collection of flashcards on soccer players',
      'I need step-by-step instructions to cook red sauce pasta',
    ],
    categories: [
      "qna",
      "collection",
      "instruction"
    ],
    examples: [
      [
        [
          'Question 1: Which structure in the plant cell is not found in an animal cell?',
          'Answer: The cell wall',
        ].join(LINE_SEPARATOR),
        [
          'Question 2: What phase of mitosis is shown?',
          'Answer: Metaphase',
        ].join(LINE_SEPARATOR),
  
        [
          'Question 3: Which organ system is responsible for gas exchange?',
          'Answer: Respiratory system',
        ].join(LINE_SEPARATOR),
        [
          'Question 4: Which organ system is responsible for breaking down food and absorbing nutrients?',
          'Answer: Digestive system',
        ].join(LINE_SEPARATOR),
        [
          'Question 5: Which type of plant cell contains chloroplasts?',
          'Answer: Photosynthetic cells',
        ].join(LINE_SEPARATOR),
        [
          'Question 6: What is the function of the vascular tissue in plants?',
          'Answer: To transport water and nutrients throughout the plant.',
        ].join(LINE_SEPARATOR),
        [
          'Question 7: Which animal has the longest lifespan?',
          'Answer: The Greenland shark, which can live for up to 500 years.',
        ].join(LINE_SEPARATOR),
        [
          'Question 8: Which animal has the most complex social structure?',
          'Answer: The honeybee, which has a complex caste system and a highly coordinated division of labor.',
        ].join(LINE_SEPARATOR),
        [
          'Question 9: Which animal is the most endangered?',
          'Answer: The vaquita, a small porpoise that lives in the Gulf of California. There are only an estimated 10 vaquitas left in the wild.',
        ].join(LINE_SEPARATOR),
  
        [
          'Question 10: Which animal has the most complex cognitive abilities?',
          'Answer: The corvids, a group of birds that includes crows, ravens, and jays. Corvids have been shown to be capable of complex problem-solving and social behavior.',
        ].join(LINE_SEPARATOR),
      ],
      [
        [
          'Lionel Messi',
          "Lionel Messi is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as the greatest player of all time, Messi has won a record seven Ballon d'Or awards, a record six European Golden Shoes, and a record four FIFA Club World Cups.",
        ].join(LINE_SEPARATOR),
        [
          'Sergio Ramos',
          'Sergio Ramos García is a Spanish professional footballer who plays as a centre-back for Ligue 1 club Paris Saint-Germain and captains the Spain national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Ivan Rakitic',
          'Ivan Rakitić is a Croatian professional footballer who plays as a central midfielder for Ligue 1 club Marseille',
        ].join(LINE_SEPARATOR),
  
        [
          'Miguel Almiron',
          'Miguel Almirón is a Paraguayan professional footballer who plays as an attacking midfielder for Major League Soccer club New England Revolution.',
        ].join(LINE_SEPARATOR),
  
        [
          'Bukayo Saka',
          'Bukayo Saka is an English professional footballer who plays as a left-back or winger for Premier League club Arsenal and the England national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Bruno Fernandes',
          'Bruno Miguel Borges Fernandes is a Portuguese professional footballer who plays as a midfielder for Premier League club Manchester United and the Portugal national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Erling Haaland',
          'Erling Braut Haaland is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Kylian Mbappe',
          'Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Matt Turner',
          'Matthew James Turner is an American professional soccer player who plays as a goalkeeper for Major League Soccer club New England Revolution and the United States national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Dusan Tadic',
          'Dusan Tadic is a Serbian professional footballer who plays as a forward or attacking midfielder for Eredivisie club Ajax and captains the Serbia national team.',
        ].join(LINE_SEPARATOR),
      ],
      [
        [
          'Step 1: Cook the pasta',
          'Bring a large pot of salted water to a boil. Add the pasta and cook according to the package directions. Drain the pasta and set aside',
        ].join(LINE_SEPARATOR),
        [
          'Step 2: Make the red sauce',
          'Heat a large skillet over medium heat. Add a drizzle of olive oil and the onion. Cook the onion until softened, about 5 minutes. Add the garlic and cook for 1 minute more. Add the tomatoes, tomato paste, oregano, basil, salt, and pepper. Bring the sauce to a simmer and cook for 20-30 minutes, or until thickened.',
        ].join(LINE_SEPARATOR),
  
        [
          'Step 3: Toss the pasta with the sauce',
          'Add the cooked pasta to the skillet with the red sauce. Toss to coat the pasta in the sauce.Serve immediately with grated Parmesan cheese, if desired.',
        ].join(LINE_SEPARATOR),
        [
          'Step 4: Enjoy!',
          'Red sauce pasta is a classic dish that is easy to make and always delicious. Enjoy!',
        ].join(LINE_SEPARATOR),
      ],
    ],
  };
  
export function getLlmExample(prompt: string): string {
    for (let i = 0; i < LISTIT_PROMPT_COMPONENTS.prefixes.length; i++) {
        const prefix = LISTIT_PROMPT_COMPONENTS.prefixes[i];
        const example = LISTIT_PROMPT_COMPONENTS.examples[i];
        const category = LISTIT_PROMPT_COMPONENTS.categories[i];
        
        let outputContent: string = "";
        for (let j = 0; j < example.length; j++) {
          outputContent += example[j] + (j === example.length - 1 ? "\n": "~");
        }
    
        prompt += "\nInput: \"" + prefix + "\"\nCategory: \"" + category + "\"\nOutput: \"" + outputContent + "\"";
    
      }
      return prompt;
  }
  
  
export function getLlmMessage(bardPrompt: string, question: string, category: DeckCategory): string {
  return bardPrompt + `\nNow generate output for the following query: \nInput: "${question}"\nCategory: "${category.toString()}"`;
}

export const fetchImage = (imgSrc: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(imgSrc, { method: 'GET', mode: "no-cors" })
        if (res.status === 404) {
          reject(false)
        } else {
          resolve(true)
        }
      } catch (error) {
        reject(false)
      }
    })
  }