import { Category } from "./adapter/Category";
import { CategoryMenuItemAdapter } from "./adapter/CategoryMenuItemAdapter";
import { MenuDisplay } from "./adapter/MenuDisplay";

const categories = [
    new Category("monitorok"),
    new Category("egerek"),
    new Category("billentyüzetek")
]

const adapted = categories.map((c) => new CategoryMenuItemAdapter(c));

new MenuDisplay().print(adapted);