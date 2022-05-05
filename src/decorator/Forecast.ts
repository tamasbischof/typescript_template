import { TemperatureService } from "./TemperatureService";

export class Forecast
{
    private _service: TemperatureService;

    constructor(service: TemperatureService)
    {
        this._service = service;
    }

    public getForecast(city: string): number
    {
        let sum = 0;
        for (let i = -10; i < 0; i++)
        {
            const temp = this._service.getTemperatureFor(city, i);
            sum += temp;
        }
        return sum / 10;
    }
}