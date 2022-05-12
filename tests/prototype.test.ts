import { expect } from "chai";
import { Address } from "../src/prototype/Address";
import { Mail } from "../src/prototype/Mail";
import { MailContent } from "../src/prototype/MailContent";

describe('Prototype tests', () => {
    it('copy not equal', () => {
        const original = new Mail(new Address("Training360", "info@training360.com"), [new Address("Mindenki", "all@training360.com")], "Körlevél", new MailContent("text/plain", "Kedves Mindenki!\nVárunk mindenkit a havi megbeszélésre! Training360"));
        const copy = new Mail(
            original.from,
            original.to.concat(new Address("valaki", "valami@email.com")),
            original.subject,
            MailContent.getCopy(original.mailContent)
        );

        expect(copy.to).to.be.not.equal(original.to);
        expect(copy.mailContent).to.be.not.equal(original.mailContent);
    });
});