export interface WeatherResponse {
  base: string;
  clouds: Object;
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: Object;
  timezone: number;
  visibility: number;
  weather: Object[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export interface GeocoderResponse {
  lat: number;
  lon: number;
}
