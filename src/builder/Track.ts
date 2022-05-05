import { Point } from "./Point";

export class Track
{
    private _name: string;
    private _points: Point[];

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get points(): Point[] {
        return this._points;
    }
    public set points(value: Point[]) {
        this._points = value;
    }
}

