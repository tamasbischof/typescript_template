import { Address } from "./Address";
import { MailContent } from "./MailContent";

export class Mail
{
    private _to: Address[];
    private _from: Address;
    private _subject: string;
    private _mailContent: MailContent;

    public get to(): Address[] {
        return this._to;
    }
    public set to(value: Address[]) {
        this._to = value;
    }
    public get from(): Address {
        return this._from;
    }
    public set from(value: Address) {
        this._from = value;
    }
    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public get mailContent(): MailContent {
        return this._mailContent;
    }
    public set mailContent(value: MailContent) {
        this._mailContent = value;
    }

    constructor(from: Address, to: Address[], subject: string, content: MailContent)
    {
        this._from = from;
        this._to = to;
        this._subject = subject;
        this._mailContent = content;
    }
}