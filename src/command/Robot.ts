import { Direction } from "./Direction";

export class Robot
{
    private _x: number = 0;
    private _y: number = 0;
    private _heading: Direction = Direction.UP;

    public get heading(): Direction {
        return this._heading;
    }
    public set heading(value: Direction) {
        this._heading = value;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }
}