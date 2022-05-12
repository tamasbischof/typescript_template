import { ArticleService } from "./ArticleService";

export class ConsoleArticleService implements ArticleService
{
    readArticle(id: number): void {
        console.log("Article read with id " + id);
    }
    createArticle(text: string): void {
        console.log("Article created with text: " + text);
    }
    
}