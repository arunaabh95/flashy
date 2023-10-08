export interface MetaphorResult {
    title: string; // The title of the search result.
    url: string; // The URL of the search result.
    publishedDate?: string; // The estimated creation date of the content. Format is YYYY-MM-DD. Nullable
    author?: string; // The author of the content, if available. Nullable
    score?: number; // A number from 0 to 1 representing similarity between the query/url and the result.
    id: string; // The temporary ID for the document. Useful for /contents endpoint.
  }

  export interface MetaphorSearchResponse {
    results: MetaphorResult[];
    autopromptString?: string; // The autoprompt string for the query, if useAutoprompt was on.
  }

export interface MetaphorSearchOptions {
    numResults?: number; // Number of search results to return. Maximum 100. Default 10
    includeDomains?: string[]; // Include results only from these domains. Example: ['example.com', 'sample.net']
    excludeDomains?: string[]; // Exclude results from these domains. Example: ['excludedomain.comcludeme.net']
    startCrawlDate?: string; // Include results only that were crawled after this date. Must be in ISO 8601 format. Example: '2023-01-01'
    endCrawlDate?: string; // Include results only that were crawled before this date. Must be in ISO 8601 format. Example: '2023-12-31'
    startPublishedDate?: string; // Include only links with a published date after this. Must be in ISO 8601 format. Example: '2023-01-01'
    endPublishedDate?: string; // Include only links with a published date before this. Must be in ISO 8601 format. Example: '2023-12-31'
    useAutoprompt?: boolean; // Uses Metaphor-optimized query.
    type?: string; // Search can be 'keyword' or 'neural'. Default is 'neural'
  }

  export type Headers = {
    "x-api-key": string,
    "Content-Type": string,
    "User-Agent": string,
  };

  export interface Flashcard {
    cardTitle: string;
    cardImage?: string;
    cardDescription: string;
  }

  /**
 * Represents a message object with an author and content.
 * @interface
 * @property {string} author - The author of the message.
 * @property {string} content - The content of the message.
 */
export interface MessageProps {
    author: string;
    content: string;
  }
  
  /**
   * Represents an example object that defines the expected input and output for a
   * prompt.
   * @interface
   * @property {string} input.content - The content of the input for the example.
   * @property {string} output.content - The expected output content for the
   * example.
   */
  export interface ExampleProps {
    input: {content: string};
    output: {content: string};
  }
  
  /**
   * Represents the properties for a prompt object, which contains a context,
   * examples, and a list of messages.
   * @interface
   * @property {string} [context] - The context for the prompt.
   * @property {ExampleProps[]} [examples] - An array of example objects that
   * define the expected input and output of the prompt.
   * @property {MessageProps[]} messages - An array of message objects that
   * represent the prompt's messages.
   */
  export interface PromptProps {
    text: string
  }
  
  /**
   * Represents the response object returned by the sendPrompt function.
   * @interface
   * @property {MessageProps[]} messages - An array of message objects that
   * represent the prompt's messages.
   * @property {MessageProps[]} candidates - An array of message objects that
   * represent the potential responses to the prompt.
   */
  export interface SendPromptResponse {
    candidates: MessageProps[];
    messages: MessageProps[];
  }