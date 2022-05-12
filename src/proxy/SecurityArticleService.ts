import { ArticleService } from "./ArticleService";
import { ConsoleArticleService } from "./ConsoleArticleService";
import { Role } from "./Role";
import { SecurityContext } from "./SecurityContext";

export class SecurityArticleService implements ArticleService
{
    private target: ConsoleArticleService;
    private securityContext: SecurityContext;

    constructor(target: ConsoleArticleService, securityContext: SecurityContext)
    {
        this.target = target;
        this.securityContext = securityContext;
    }

    readArticle(id: number): void {
        if (this.securityContext.hasRole(Role.READ))
        {
            this.target.readArticle(id);
        }
        else
        {
            throw new SecurityException("No read permission");
        }
    }
    createArticle(text: string): void {
        if (this.securityContext.hasRole(Role.WRITE))
        {
            this.target.createArticle(text);
        }
        else
        {
            throw new SecurityException("No write permission");
        }
    }
    
}

export class SecurityException extends Error
{

}