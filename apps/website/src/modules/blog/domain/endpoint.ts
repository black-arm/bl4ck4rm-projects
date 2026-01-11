export class Endpoint {
  private static readonly DEV_TO_BASE_URL = 'https://dev.to/api';
  
  static getArticlesByUsername(username: string): string {
    return `${this.DEV_TO_BASE_URL}/articles?username=${username}`;
  }
  
  static get devToEndpoint(): string {
    return this.DEV_TO_BASE_URL;
  }
}