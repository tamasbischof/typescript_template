import { Category } from "./Category";
import { MenuItem } from "./MenuItem";

export class CategoryMenuItemAdapter implements MenuItem
{
    private _category: Category;

    constructor(category: Category)
    {
        this._category = category;
    }

    getTitle(): string {
        return this._category.name;
    }
}