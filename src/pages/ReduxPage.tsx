import { getWeather } from "../modules/api/OtherApi";
import { GeocoderResponse } from "../modules/api/schemas";
import { useAppDispatch, useAppSelector } from "../store/baseHooks";
import { useGetCoordinatesQuery } from "../store/weatherApi";


export default function ReduxPage() {
  const city = useAppSelector((state)=> state.city.city)
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCoordinatesQuery(city);
  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div>
      <div>

      </div>

      <div>{data && data[0].lat}</div>
    </div>
  );
}
