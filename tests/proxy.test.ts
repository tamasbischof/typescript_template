import { expect } from "chai";
import { ConsoleArticleService } from "../src/proxy/ConsoleArticleService";
import { Role } from "../src/proxy/Role";
import { SecurityArticleService } from "../src/proxy/SecurityArticleService"
import { SecurityContext } from "../src/proxy/SecurityContext";

describe('Proxy tests', () => {
    it('non-existent write permission check', () => {
        const securityContext = new SecurityContext();
        securityContext.setRole(Role.READ);
        const articleService = new SecurityArticleService(new ConsoleArticleService(), securityContext);
        expect(() => articleService.createArticle("Lorem ipsum")).to.throw('No write permission');
    });

    it('write permission check', () => {
        const securityContext = new SecurityContext();
        securityContext.setRole(Role.WRITE);
        const articleService = new SecurityArticleService(new ConsoleArticleService(), securityContext);
        expect(() => articleService.createArticle("Lorem ipsum")).to.not.throw();
    });
});