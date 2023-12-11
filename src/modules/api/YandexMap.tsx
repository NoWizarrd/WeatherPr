import { YMaps, Map, Placemark, GeolocationControl, Rectangle } from '@pbe/react-yandex-maps';
import { YMapGeolocationControl } from '@yandex/ymaps3-types/packages/controls';

const mapState = { center: [56.02, 92.92], zoom: 10 };

export const YandexMap = () => (
  <YMaps>
    <Map state={mapState} width='80vw' height='90vh'>

      <Placemark
        geometry={{
          coordinates: [56.0043, 92.5217]
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
      <Placemark geometry={[56.02, 92.92]}/>
    </Map>
  </YMaps>
);