import axios from "axios";

export const abstractApiClient = axios.create({
    baseURL: 'https://ipgeolocation.abstractapi.com/v1/',
    params: {
        'api_key': import.meta.env.VITE_ABSTRACTAPI_KEY
    }
});

export const openWeatherMapClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        'appid': import.meta.env.VITE_OPEN_WEATHER_MAP_KEY,
        'units': 'metric'
    }
});