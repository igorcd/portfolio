import axios from "axios";

export const ipStackClient = axios.create({
    baseURL: 'http://api.ipstack.com',
    params: {
        'access_key': import.meta.env.VITE_IPSTACK_KEY
    }
});

export const openWeatherMapClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        'appid': import.meta.env.VITE_OPEN_WEATHER_MAP_KEY,
        'units': 'metric'
    }
});