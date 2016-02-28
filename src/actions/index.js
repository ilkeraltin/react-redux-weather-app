import axios from 'axios';
const API_KEY='8c21a133cd42173b56030af19d5fee9b';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city}`;
  const request=axios.get(url);
  return{
    type:FETCH_WEATHER,
    payload:request
  }
}
