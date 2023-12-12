import React, { useState } from "react";
import useQuery from "../hooks/useQuery";
import { GeocoderResponse } from "src/modules/api/schemas";
import Counter from "../components/Counter";

export default function QueryPage() {
  const [city, setCity] = useState("");

  const {
    data = [],
    error,
    loading,
  } = useQuery<GeocoderResponse[]>(
    `https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=7c105a75bb7e095e8ba6d6e3cadfca70&q=${city}`,
    {}
  );

  return (
    <div>
      <input
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      {loading && <div>loading...</div>}
      {error && <div>Город не найден</div>}
      {!!data.length && !loading && (
        <div>
          {data[0]?.lat}, {data[0]?.lon}
        </div>
      )}
    </div>
  );
}
