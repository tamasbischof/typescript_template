import { Address } from "./Address";
import { Mail } from "./Mail";
import { MailContent } from "./MailContent";

export class MailService
{
    private _mail: Mail = new Mail(new Address("Training360", "info@training360.com"), [new Address("Mindenki", "all@training360.com")], "Körlevél", new MailContent("text/plain", "Kedves Mindenki!\nVárunk mindenkit a havi megbeszélésre! Training360"));
    private _sender: MailSender;

    constructor(sender: MailSender)
    {
        this._sender = sender;
    }

    public send(to: Address): void
    {
        const copy = new Mail(
            this._mail.from,
            this._mail.to.concat(to),
            this._mail.subject,
            MailContent.getCopy(this._mail.mailContent)
        );
        this._sender.send(copy);
    }

    public sendContent(to: Address, mimeType: string, content: string)
    {
        const copy = new Mail(
            this._mail.from,
            this._mail.to.concat(to),
            this._mail.subject,
            new MailContent(mimeType, content)
        );
        this._sender.send(copy);
    }
}

export interface MailSender
{
    send(mail: Mail): void;
}

export class ConcreteMailSender implements MailSender
{
    public send(mail: Mail)
    {
        console.log(mail);
    }
}