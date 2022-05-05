import { TemperatureService } from "./TemperatureService";

export class RetryTemperatureService implements TemperatureService
{
    private _target: TemperatureService;

    constructor(target: TemperatureService)
    {
        this._target = target;
    }

    getTemperatureFor(city: string, days: number): number {
        let ret = 0;
        do
        {
            try
            {
                ret = this._target.getTemperatureFor(city, days);
            }
            catch (e)
            {
                
            }
        } while (ret === 0);
        return ret;
    }
}