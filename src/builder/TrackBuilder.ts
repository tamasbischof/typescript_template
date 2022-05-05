import { Track } from "./Track";
import { Point } from "./Point";

export class TrackBuilder
{
    private _name: string;
    private _points: Point[] = [];

    public withName(name: string): TrackBuilder
    {
        this.validateName(name);
        this._name = name;
        return this;
    }

    public withPoint(lat: number, lon: number, elevation: number, time: number): TrackBuilder
    {
        const point = new Point();
        if (lat < -90 || lat > 90)
        {
            throw new Error(`Invalid latitude: ${lat}`);
        }
        if (lon < -180 || lon > 180)
        {
            throw new Error(`Invalid longitude: ${lon}`);
        }
        point.lat = lat;
        point.lon = lon;
        point.elevation = elevation;
        point.time = time;
        this._points.push(point);
        return this;
    }

    public build(): Track
    {   
        this.validateName(this._name);
        const track = new Track();
        track.name = this._name;
        track.points = this._points;
        return track;
    }

    private validateName(name: string): boolean
    {
        if (!name)
        {
            throw new Error("Name cannot be empty");
        }
        return true;
    }
}