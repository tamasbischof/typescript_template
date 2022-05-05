export class MailContent
{
    private _mimeType: string;
    private _text: string;

    public get mimeType(): string {
        return this._mimeType;
    }
    public set mimeType(value: string) {
        this._mimeType = value;
    }
    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }

    constructor(mimeType: string, text: string)
    {
        this._mimeType = mimeType;
        this._text = text;
    }

    public static getCopy(other: MailContent)
    {
        return new MailContent(other._mimeType, other._text);
    }
}