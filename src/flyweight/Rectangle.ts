export class Rectangle
{
    private static _instances: Map<Rectangle, Rectangle> = new Map<Rectangle,Rectangle>();

    public static getInstance(a: number, b: number): Rectangle
    {
        const newRect = new Rectangle(a, b);
        let rect = Rectangle._instances.get(newRect);
        if (rect)
        {
            return rect;
        }
        else
        {
            return newRect;
        }
    }

    private _width: number;
    private _height: number;

    constructor(a: number, b: number)
    {
        this._width = a;
        this._height = b;
    }
}