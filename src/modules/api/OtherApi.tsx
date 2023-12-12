import axios from "axios";
import { GeocoderResponse, WeatherResponse } from "./schemas";

const BASE_URL = "https://api.openweathermap.org";
const appid = "7c105a75bb7e095e8ba6d6e3cadfca70";

const geocoderUrl = "/geo/1.0/direct";
const weatherUrl = "/data/2.5/weather";

export async function getWeather(lat: number, lon: number) {
  try {
    const response = await axios.get<WeatherResponse>(BASE_URL + weatherUrl, {
      params: {
        lat,
        lon,
        appid,
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function findCity(name: string) {
  try {
    const response = await axios.get<GeocoderResponse[]>(
      BASE_URL + geocoderUrl,
      {
        params: {
          q: name,
          limit: 1,
          appid,
        },
      }
    );

    return response.data[0];
  } catch (e) {
    console.log(e);
  }
}
