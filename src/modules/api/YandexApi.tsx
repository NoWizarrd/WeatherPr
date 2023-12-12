import axios from "axios";
import React from "react";

export async function YandexApi() {
  let url = `https://api.weather.yandex.ru/v2/informers?lat=55.75396&lon=37.620393/`;
  try {
    const request = await axios
      .get(url, {
        headers: {
          "X-Yandex-API-Key": "325bd1e5-d07c-46ac-984d-d483c1751c6e",
        },
      })
      .then();

/*     fetch(url, {
      headers: {
        "X-Yandex-API-Key": "325bd1e5-d07c-46ac-984d-d483c1751c6e",
      },
    }); */

    return request;
  } catch (e) {
    console.log(e);
  }
}
