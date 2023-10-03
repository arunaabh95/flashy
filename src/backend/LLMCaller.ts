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

import { PromptProps } from './types';

export default class LLMCaller {
    private apiKey: string;
    private baseUrl: string;
  
    constructor() {
      this.apiKey = process.env.REACT_APP_PALM_API_KEY || "";
      this.baseUrl = 'https://generativelanguage.googleapis.com';
    }
  
    async sendPrompt(
        prompt: PromptProps,
        temperature = 0.1,
    ): Promise<any> {
        try {
            const payload = {
                prompt: {...prompt},
                temperature,
                candidate_count: 1,
              };
            const response = await fetch(`${this.baseUrl}/v1beta2/models/chat-bison-001:generateMessage?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
             });
        if(response.status === 200) {
            const result = await response.json();
            return result.candidates[0].content;
          } else {
            const res = await response.json();
            return res.error.message;
          }
        } catch (error) {
          console.log(error)
        }   
  }
}
  