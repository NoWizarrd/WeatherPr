import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DenseTable from '../modules/table/Table'
import styled from 'styled-components'
import axios from 'axios'
//import { YandexApi } from '../modules/api/YandexApi'
//import { WeatherApi } from '../modules/api/OtherApi'

// interface ICity {

// }

const cities = [ // С api подгружать
  'Krasnoyarsk',
  "Moscow",
  "London",
  "Novosibirsk",
  "Kansk"
]

const Aria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vh auto;
  padding: 15px;
`

const API_key = '7c105a75bb7e095e8ba6d6e3cadfca70'
let ans;
async function FindCoordinates(city:string) {
  try {
      ans = (await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)).data[0]
      //.then((res)=>console.log(res.data))
      //.catch((e) => {throw new Error(e)})
      console.log(ans.lat, ans.lon)
      return ans
  } catch (e) {
      console.log(e)
  }
}


export default function ListPage() {


  const [textValue, setTextValue] = useState('')

  //const inputValue = document.getElementById('input_of_list')
  //const request = YandexApi()
  //console.log(request)


  return (
    <>
      <Aria>
        <p>
          Выберете город
        </p>
        <Autocomplete
          disablePortal
          style={{marginLeft:'20px'}}
          id="input_of_list"
          options={cities}
          sx={{ width: 300, marginBottom:'40px', display: 'flex' }}
          renderInput={(params) => <TextField {...params} label="city"/>}
          onChange={(event, value, reason) => {setTextValue(value)}}
          onInputChange={(event, value, reason) => {FindCoordinates(value)}}
        />
          {textValue && //пришлось сделать проверку на null
          <DenseTable lat={ans?.lat} lon={ans?.lon}/>}
          

          {/* данные в виде таблицы нужна с api подгрузить после выделения города в поле текста сверху */}
      </Aria>
    </>
  )
}
