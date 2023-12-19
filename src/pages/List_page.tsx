import React, { useCallback, useEffect, useState } from "react";
//import { findCity, getWeather } from "../modules/api/OtherApi";
import { GeocoderResponse, WeatherResponse } from "../modules/api/schemas";
import DenseTable from "../modules/table/Table";
import { useAppDispatch, useAppSelector } from "../store/baseHooks";
import { changeCity } from "../store/citySlice";
import {
  useGetCoordinatesQuery,
  useGetWeatherQuery,
  useLazyGetWeatherQuery,
} from "../store/weatherApi";
import { changeCoordinates } from "../store/coordSlice";
import debounce from "lodash.debounce";

export default function ListPage() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.city);
  const { lat, lon } = useAppSelector((state) => state.coordinates);
  const { data = [] } = useGetCoordinatesQuery(city, {
    skip: !city,
  });

  const [localCity, setCity] = useState(city);

  const [trigger, { isFetching, data: weather }] = useLazyGetWeatherQuery();

  // const { data: weather, isLoading: isWeatheLoading } = useGetWeatherQuery(
  //   {
  //     lat: data?.at(0)?.lat,
  //     lon: data?.at(0)?.lon,
  //   },
  //   {
  //     skip: !data?.at(0)?.lat || !data?.at(0)?.lon,
  //   }
  // );

  useEffect(() => {
    if (data.length) {
      dispatch(changeCoordinates({ lat: data[0].lat, lon: data[0].lon }));
    }
  }, [data]);

  const update = useCallback(
    debounce((val) => {
      dispatch(changeCity(val));
    }, 500),
    [changeCity]
  );

  return (
    <div>
      <input
        value={localCity}
        onChange={(event) => {
          setCity(event.target.value);
          update(event.target.value);
        }}
      />

      <button
        onClick={() => {
          if (data[0]) {
            trigger({ lat: data[0].lat, lon: data[0].lon });
          }
        }}
      >
        Получить данные
      </button>

      {!!data.length && (
        <>
          <div>{lat}</div>
          <div>{lon}</div>
        </>
      )}

      {isFetching && <div>Load...</div>}

      {!!weather && !isFetching && <DenseTable Data={weather} />}
    </div>
  );
}
