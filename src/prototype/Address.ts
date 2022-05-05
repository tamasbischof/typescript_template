export class Address
{
    private readonly _name: string;
    private readonly _email: string;

    public get email(): string {
        return this._email;
    }

    public get name(): string
    {
        return this.name;
    }

    constructor(name: string, email: string)
    {
        this._name = name;
        this._email = email;
    }
}