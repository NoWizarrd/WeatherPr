import React, { useEffect, useState } from "react";
//import { findCity, getWeather } from "../modules/api/OtherApi";
import { GeocoderResponse, WeatherResponse } from "../modules/api/schemas";
import DenseTable from "../modules/table/Table";
import { useAppDispatch, useAppSelector } from "../store/baseHooks";
import { changeCity } from "../store/citySlice";
import { useGetCoordinatesQuery, useGetWeatherQuery } from "../store/weatherApi";
import { changeCoordinates } from "../store/coordSlice";


export default function ListPage() {

  const dispatch = useAppDispatch()
  const {city} = useAppSelector((state)=> state.city)
  const {lat, lon} = useAppSelector((state)=> state.coordinates)
  const [dataCoord, setDataCoord] = useState({lat:lat, lon:lon})
  const { data, isLoading } = useGetCoordinatesQuery(city);
  //let res:number = 1; 
  //useGetWeatherQuery(data[0].lon, data[0].lat)
//useGetWeatherQuery(dataCoord).data

  //Срабатывает на второй раз присваивание координат в 28 и 34 строке
  return ( //хотел вызвать useGetWeatherQuery по нажатию кнопки
    <div>
      <input onChange={(event)=> {
        dispatch(changeCity(event.target.value));
        if(data){
          setDataCoord({lat:data[0].lat, lon:data[0].lon})
        }
        }}/>

      <button onClick={() => {
        if (dataCoord) {
          dispatch(changeCoordinates(dataCoord))
        }}}>Получить данные</button>

        <div>{lon}</div>
        <div>{lat}</div>
      {/* {!!res && <DenseTable Data={res} />} */}
    </div>
  );
}
