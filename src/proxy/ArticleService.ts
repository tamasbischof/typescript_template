export interface ArticleService
{
    readArticle(id: number): void;
    createArticle(text: string): void;
}