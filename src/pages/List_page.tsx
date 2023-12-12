import React, { useEffect, useState } from "react";
import { findCity, getWeather } from "../modules/api/OtherApi";
import { WeatherResponse } from "../modules/api/schemas";
import DenseTable from "../modules/table/Table";

export default function ListPage() {
  const [city, setCity] = useState("");

  const [data, setData] = useState<WeatherResponse>();

  const getData = async () => {
    const coordsRes = await findCity(city);

    if (!coordsRes) {
      return;
    }

    const { lat, lon } = coordsRes;

    const weatherRes = await getWeather(lat, lon);

    if (!weatherRes) {
      return;
    }

    setData(weatherRes);
  };

  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} />

      <button onClick={getData}>Получить данные</button>

      {!!data && <DenseTable data={data} />}
    </div>
  );
}
