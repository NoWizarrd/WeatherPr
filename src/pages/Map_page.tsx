import React from 'react'
import { YandexMap } from '../modules/api/YandexMap'
import styled from 'styled-components'
import ButtonFilter from '../modules/buttonFilter/ButtonFilter'

const Aria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vh auto;
  padding: 15px;
`

export default function MapPage() {
  return (
    <Aria>
        <YandexMap/>
    </Aria>

  )
}
