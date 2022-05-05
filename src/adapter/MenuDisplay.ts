import { MenuItem } from "./MenuItem";

export class MenuDisplay
{
    print(menuItems: MenuItem[])
    {
        for (const item of menuItems)
        {
            console.log(item.getTitle());
        }
    }
}