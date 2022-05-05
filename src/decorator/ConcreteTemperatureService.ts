import { TemperatureService } from "./TemperatureService";

export class ConcreteTemperatureService implements TemperatureService
{
    getTemperatureFor(city: string, days: number): number {
        return 18;
    }

}