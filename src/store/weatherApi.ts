import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeocoderResponse, WeatherResponse } from "../modules/api/schemas";
import { useAppSelector } from "./baseHooks";

const BASE_URL = "https://api.openweathermap.org";
const appid = "7c105a75bb7e095e8ba6d6e3cadfca70";

const geocoderUrl = "/geo/1.0/direct";
const weatherUrl = "/data/2.5/weather";

//const {city} = useAppSelector((state) => state.city)

export const weatherApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: (city:string) => ({
        url: geocoderUrl,
        params: {
          q: city,
          limit: 1,
          appid: appid,
        }
      }),
    }),
    getWeather: builder.query<WeatherResponse, any>({
      query: (response:GeocoderResponse) => ({
        url: weatherUrl,
        params: {
          lat: response.lat,
          lon: response.lon,
          appid: appid,
        }
      }),
    })
  }),
});


export const {useGetCoordinatesQuery, useGetWeatherQuery} = weatherApi