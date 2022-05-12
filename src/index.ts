import { Rectangle } from "./flyweight/Rectangle";
import { ConsoleArticleService } from "./proxy/ConsoleArticleService";
import { Role } from "./proxy/Role";
import { SecurityArticleService } from "./proxy/SecurityArticleService";
import { SecurityContext } from "./proxy/SecurityContext";

const securityContext = new SecurityContext();
securityContext.setRole(Role.READ, Role.WRITE);
const consoleService = new ConsoleArticleService();
const articleService = new SecurityArticleService(consoleService, securityContext);
articleService.readArticle(5);
articleService.createArticle("Lorem ipsum");
securityContext.unSetRole(Role.WRITE);
articleService.createArticle("Sample article");