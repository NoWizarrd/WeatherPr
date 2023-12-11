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
]

const Aria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vh auto;
  padding: 15px;
`




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
        />

          {textValue && <DenseTable city={textValue}/>}
          

          {/* данные в виде таблицы нужна с api подгрузить после выделения города в поле текста сверху */}
      </Aria>
    </>
  )
}
