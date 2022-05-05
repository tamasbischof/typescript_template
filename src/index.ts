import { ConcreteTemperatureService } from "./decorator/ConcreteTemperatureService";
import { Forecast } from "./decorator/Forecast";
import { RetryTemperatureService } from "./decorator/RetryTemperatureService";

console.log(
    new Forecast(new RetryTemperatureService(new ConcreteTemperatureService())).getForecast("Budapest")
);