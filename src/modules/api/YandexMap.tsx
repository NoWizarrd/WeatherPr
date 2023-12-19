import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps';
import { useAppSelector } from '../../store/baseHooks';


export const YandexMap = () => {

  const {lat, lon} = useAppSelector(state => state.coordinates)
  const mapState = { center: [lat, lon], zoom: 10 };

return(
  <YMaps>
    <Map state={mapState} width='80vw' height='90vh'>
      <Placemark
        geometry={{
          coordinates: [lat, lon]
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: 'images/myIcon.gif',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }}
      />
        <GeolocationControl />
      <Placemark geometry={[lat, lon]}/>
    </Map>
  </YMaps>
)};