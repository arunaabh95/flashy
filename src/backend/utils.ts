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

import {ExampleProps, MessageProps} from './types';

const LINE_SEPARATOR = "|";
export const LISTIT_PROMPT_COMPONENTS = {
    prefixes: [
      'I need questions and answers for: Biology exam',
      'I need a collection of cards for: soccer players',
      'Give me step by step instruction for: cook red sauce pasta',
    ],
    examples: [
      [
        [
          'Question 1: Which structure in the plant cell is not found in an animal cell?',
          'https://sciencenotes.org/wp-content/uploads/2023/05/Labeled-Plant-Cell-Diagram.png',
          'Answer: The cell wall',
        ].join(LINE_SEPARATOR),
        [
          'Question 2: What phase of mitosis is shown?',
          'https://www.animalgenome.org/edu/blue_genes/mit.gif',
          'Answer: Metaphase',
        ].join(LINE_SEPARATOR),
  
        [
          'Question 3: Which organ system is responsible for gas exchange?',
          'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210609093702/ri/950/picture/2021/6/shutterstock_1707538084.jpg',
          'Answer: Respiratory system',
        ].join(LINE_SEPARATOR),
        [
          'Question 4: Which organ system is responsible for breaking down food and absorbing nutrients?',
          'https://cdn.britannica.com/39/8039-050-B124FC20/human-digestive-system-front.jpg',
          'Answer: Digestive system',
        ].join(LINE_SEPARATOR),
        [
          'Question 5: Which type of plant cell contains chloroplasts?',
          'https://micro.magnet.fsu.edu/cells/chloroplasts/images/chloroplastsfigure1.jpg',
          'Answer: Photosynthetic cells',
        ].join(LINE_SEPARATOR),
        [
          'Question 6: What is the function of the vascular tissue in plants?',
          'https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2018/05/Dicot-vs-Monocot-Stem-600x298.jpg',
          'Answer: To transport water and nutrients throughout the plant.',
        ].join(LINE_SEPARATOR),
        [
          'Question 7: Which animal has the longest lifespan?',
          'https://cdn.britannica.com/11/181611-050-0494BE9F/Greenland-shark-ice-Lancaster-Sound-Baffin-Island.jpg',
          'Answer: The Greenland shark, which can live for up to 500 years.',
        ].join(LINE_SEPARATOR),
        [
          'Question 8: Which animal has the most complex social structure?',
          'https://en.wikipedia.org/wiki/File:The_Lone_Pollinator.jpg',
          'Answer: The honeybee, which has a complex caste system and a highly coordinated division of labor.',
        ].join(LINE_SEPARATOR),
        [
          'Question 9: Which animal is the most endangered?',
          'https://oceangeneration.org/wp-content/uploads/2023/07/meet-the-vaquita-the-most-endangered-marine-mammal-1024x604.png',
          'Answer: The vaquita, a small porpoise that lives in the Gulf of California. There are only an estimated 10 vaquitas left in the wild.',
        ].join(LINE_SEPARATOR),
  
        [
          'Question 10: Which animal has the most complex cognitive abilities?',
          'https://www.calacademy.org/sites/default/files/styles/manual_crop_standard_960x540/public/assets/17324827034_e13da891da_k2.jpg?itok=qBL7JZhe&c=ed8259a7012dce03a73e828ac88717d9',
          'Answer: The corvids, a group of birds that includes crows, ravens, and jays. Corvids have been shown to be capable of complex problem-solving and social behavior.',
        ].join(LINE_SEPARATOR),
      ],
      [
        [
          'Lionel Messi',
          'https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg?w=300',
          "Lionel Messi is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as the greatest player of all time, Messi has won a record seven Ballon d'Or awards, a record six European Golden Shoes, and a record four FIFA Club World Cups.",
        ].join(LINE_SEPARATOR),
        [
          'Sergio Ramos',
          'https://b.fssta.com/uploads/application/soccer/headshots/884.vresize.350.350.medium.61.png',
          'Sergio Ramos García is a Spanish professional footballer who plays as a centre-back for Ligue 1 club Paris Saint-Germain and captains the Spain national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Ivan Rakitic',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ivan_Rakiti%C4%87_2020.jpg/330px-Ivan_Rakiti%C4%87_2020.jpg',
          'Ivan Rakitić is a Croatian professional footballer who plays as a central midfielder for Ligue 1 club Marseille',
        ].join(LINE_SEPARATOR),
  
        [
          'Miguel Almiron',
          'https://i2-prod.chroniclelive.co.uk/sport/football/football-news/article25667282.ece/ALTERNATES/s810/0_GettyImages-1435331212.jpg',
          'Miguel Almirón is a Paraguayan professional footballer who plays as an attacking midfielder for Major League Soccer club New England Revolution.',
        ].join(LINE_SEPARATOR),
  
        [
          'Bukayo Saka',
          'https://en.wikipedia.org/wiki/File:Bukayo_Saka.jpg',
          'Bukayo Saka is an English professional footballer who plays as a left-back or winger for Premier League club Arsenal and the England national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Bruno Fernandes',
          'https://en.wikipedia.org/wiki/File:Bruno_Fernandes_Portugal,_2018.jpg',
          'Bruno Miguel Borges Fernandes is a Portuguese professional footballer who plays as a midfielder for Premier League club Manchester United and the Portugal national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Erling Haaland',
          'https://b.fssta.com/uploads/application/soccer/headshots/66617.vresize.350.350.medium.77.png',
          'Erling Braut Haaland is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Kylian Mbappe',
          'https://cdn.britannica.com/39/239139-050-49A950D1/French-soccer-player-Kylian-Mbappe-FIFA-World-Cup-December-10-2022.jpg',
          'Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Matt Turner',
          'https://en.wikipedia.org/wiki/File:CINvRIC_2017-07-09_-_Matt_Turner_(40983917805)_(cropped).jpg',
          'Matthew James Turner is an American professional soccer player who plays as a goalkeeper for Major League Soccer club New England Revolution and the United States national team.',
        ].join(LINE_SEPARATOR),
  
        [
          'Dusan Tadic',
          'https://en.wikipedia.org/wiki/File:Du%C5%A1an_Tadi%C4%87_(cropped).jpg',
          'Dusan Tadic is a Serbian professional footballer who plays as a forward or attacking midfielder for Eredivisie club Ajax and captains the Serbia national team.',
        ].join(LINE_SEPARATOR),
      ],
      [
        [
          'Step 1: Cook the pasta',
          'https://www.seriouseats.com/thmb/TfSy1RtkorxhtUuSVxOvg-HlQfo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__02__20160209-amatriciana-pasta-vicky-wasik-011-bf0b7888fa4a4de6b75415eeeef002b0.jpg',
          'Bring a large pot of salted water to a boil. Add the pasta and cook according to the package directions. Drain the pasta and set aside',
        ].join(LINE_SEPARATOR),
        [
          'Step 2: Make the red sauce',
          'https://www.thespruceeats.com/thmb/PfPfSsOXJmP-SW3lg4thC1rRqRo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-tomato-pasta-sauce-recipe-3992836-hero-01-8ad6cb1d12564635a23a0bfcdaee9980.jpg',
          'Heat a large skillet over medium heat. Add a drizzle of olive oil and the onion. Cook the onion until softened, about 5 minutes. Add the garlic and cook for 1 minute more. Add the tomatoes, tomato paste, oregano, basil, salt, and pepper. Bring the sauce to a simmer and cook for 20-30 minutes, or until thickened.',
        ].join(LINE_SEPARATOR),
  
        [
          'Step 3: Toss the pasta with the sauce',
          'https://www.seriouseats.com/thmb/HRTt9XeDzxEDtp-LwAGewyGIIjs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__02__20160218-finishin-pasta-sauce-1-d1709732a0734803a36e34610aff94db.jpg',
          'Add the cooked pasta to the skillet with the red sauce. Toss to coat the pasta in the sauce.Serve immediately with grated Parmesan cheese, if desired.',
        ].join(LINE_SEPARATOR),
        [
          'Step 4: Enjoy!',
          'https://assets.epicurious.com/photos/5f456a85834292ff425080a2/1:1/w_2240,c_limit/pasta-with-burst-cherry-tomatoes-recipe-BA-082520.jpg',
          'Red sauce pasta is a classic dish that is easy to make and always delicious. Enjoy!',
        ].join(LINE_SEPARATOR),
      ],
    ],
  };
  
  /**
   * @property {string[]} prefixes
   * @property {string[][]} examples
   *
   * Each element in examples has a length of prefixes.length.
   * The value at prefixes[i] corresponds to the value at examples[<any>][i].
   */
  
  /**
   * Construct a prompt string from a PromptComponents object and an input.
   *
   * @param {string} input                      The input to the prompt.
   * @returns A prompt string.
   */
  
export function getLlmExample(): ExampleProps[] {
    const data: ExampleProps[] = [];
    for (let i = 0; i < LISTIT_PROMPT_COMPONENTS.prefixes.length; i++) {
        const prefix = LISTIT_PROMPT_COMPONENTS.prefixes[i];
        const example = LISTIT_PROMPT_COMPONENTS.examples[i];
        
        let outputContent: string = "";
    
        for (let j = 0; j < example.length; j++) {
          outputContent += example[j] + "~";
        }
    
        const output = {
          content: outputContent,
        };
        const input = {
          content: prefix,
        };
    
        data.push({ input, output });
      }
      console.log(data);
      return data;
  }
  
  
export function getLlmMessage(prompt: string): MessageProps {
  return {
    author:'0',
    content: `Hi Bard, create a flashcard deck based on user prompt. "${prompt}".`, 
  };
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