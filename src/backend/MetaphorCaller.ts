import { MetaphorSearchResponse, MetaphorSearchOptions } from './types';

export default class MetaphorCaller {
    private apiKey: string;
    private baseUrl: string;
    private headers: HeadersInit;
  
    constructor() {
      this.apiKey = process.env.REACT_APP_METAPHOR_API_KEY || "";
      this.baseUrl = 'https://api.metaphor.systems';
      this.headers = new Headers();
      this.headers.set("x-api-key", encodeURIComponent(this.apiKey));
      this.headers.set("Content-Type", "application/json");
    }
  
    public async getResults(query: string): Promise<MetaphorSearchResponse> {
        const options: MetaphorSearchOptions = {
            numResults: 10,
            useAutoprompt: true,
            type: "neural",
        }
        const response = await fetch(this.baseUrl + "/search", {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({query, ...options}),
          });
      
          if (!response.ok) {
            const message = (await response.json()).error;
            throw new Error(`Request failed with status ${response.status}. ${message}`);
          }
      
          return await response.json();
    }
  }
  