import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios, { AxiosPromise } from 'axios';

function createData(
  name: string,
  definition: number | string,
) {
  return { name, definition };
}


interface WeatherData {
  base: string,
  clouds: Object,
  cod: number,
  coord: {
    lon:number,
    lat:number
  },
  dt: number,
  id: number,
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  },
  name: string,
  sys: Object,
  timezone: number,
  visibility: number,
  weather: Object[],
  wind: {
    speed:number,
    deg:number,
    gust:number
  }
}

const API_key = '7c105a75bb7e095e8ba6d6e3cadfca70'
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=56&lon=92&appid=${API_key}`
let response:WeatherData;
let ans:string;

// function translit(word:string){
// 	var answer = '';
// 	var converter:any = {
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
// 		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
// 		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
// 		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
// 		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
// 		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
// 		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
// 		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
// 		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// 	};
 
// 	for (var i = 0; i < word.length; ++i ) {
// 		if (converter[word[i]] == undefined){
// 			answer += word[i];
// 		} else {
// 			answer += converter[word[i]];
// 		}
// 	}
 
// 	return answer;
// }



async function WeatherApi(lat:string, lon:string) { //заменить координаты на данные из FindCoordinates
  try {
      response = (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}6&lon=${lon}&appid=${API_key}`)).data
      //.then((res)=>console.log(res.data))
      //.catch((e) => {throw new Error(e)})
  } catch (e) {
      console.log(e)
  }
}

interface ICity{
  lat:string,
  lon:string
}

export default function DenseTable(props:ICity) {

  //FindCoordinates(props.city)
  useEffect(()=>{
    WeatherApi(props.lat,props.lon)
    //setTimeout(WeatherApi, 1000)
    //console.log(FindCoordinates(props.city))
  }, [response, props.lat])

  //console.log(response)

  const rows = [
    createData('Название', response?.name),
    createData('Временная зона', response?.timezone / 3600),
    createData('Температура сейчас', response?.main.temp),
    createData('Ощущается как', response?.main.feels_like),
    createData('Максимальная температура', response?.main.temp_max),
    createData('Минимальная температура', response?.main.temp_min),
    createData('Давление', response?.main.pressure),
  ];
  

  return (
    !response ? <div>loading...</div> :

    <TableContainer component={Paper} sx={{ maxWidth: '40vw'}}>
      <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.definition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}