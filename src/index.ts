import { Rectangle } from "./flyweight/Rectangle";

console.log(Rectangle.getInstance(10, 20) === Rectangle.getInstance(10,20));