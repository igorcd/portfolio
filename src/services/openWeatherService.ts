import { Get } from "./baseService";
import { openWeatherMapClient } from '../plugins/http';
import WeatherDTO from "../dtos/WeatherDTO";

const openWeatherService = {
    getCurrentWeather: (coordinates: { lat: number; lon: number}) => {
        return Get<WeatherDTO>(openWeatherMapClient, '/weather', coordinates );
    }
};

export default openWeatherService;