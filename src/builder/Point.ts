
export class Point {
    private _lat: number;
    private _lon: number;
    private _elevation: number;
    private _time: number;

    public get lat(): number {
        return this._lat;
    }
    public set lat(value: number) {
        this._lat = value;
    }
    public get lon(): number {
        return this._lon;
    }
    public set lon(value: number) {
        this._lon = value;
    }
    public get elevation(): number {
        return this._elevation;
    }
    public set elevation(value: number) {
        this._elevation = value;
    }
    public get time(): number {
        return this._time;
    }
    public set time(value: number) {
        this._time = value;
    }
}
