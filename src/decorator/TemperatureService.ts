export interface TemperatureService
{
    getTemperatureFor(city: string, days: number): number;
}