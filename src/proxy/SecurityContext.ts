import { Role } from "./Role";

export class SecurityContext
{
    private roles: Role;

    public hasRole(role: Role): boolean
    {
        return (this.roles & role) === role;
    }

    public setRole(...roles: Role[])
    {
        for (const role of roles)
        {
            this.roles |= role;
        }
    }

    public unSetRole(...roles: Role[])
    {
        for (const role of roles)
        {
            this.roles &= ~role;
        }
    }
}