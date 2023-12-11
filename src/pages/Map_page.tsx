import React from 'react'
import { YandexMap } from '../modules/api/YandexMap'

export default function MapPage() {
  return (
    <>
        <div>Карта на 90% окна и сверху фильтры для карты сделать: город, показатели, которые отображать на ней</div>
        <YandexMap/>
    </>

  )
}
