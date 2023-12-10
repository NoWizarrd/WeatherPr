import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

// interface ICity {

// }

const cities = [ // С api подгружать
  'Красноярск',
  "Москва",
  "Новосибирск",
]

const Aria = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 7vh auto;
  padding: 15px;
`

export default function ListPage() {



  return (
    <>
      <Aria>
        <p>
          Выберете город
        </p>
        <Autocomplete
          disablePortal
          style={{marginLeft:'20px'}}
          id="combo-box-demo"
          options={cities}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="city"/>}
        />

          {/* данные в виде таблицы нужна с api подгрузить после выделения города в поле текста сверху */}
      </Aria>
    </>
  )
}
