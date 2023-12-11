import axios from 'axios'
import React from 'react'



const API_key = '7c105a75bb7e095e8ba6d6e3cadfca70'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=56&lon=92&appid=${API_key}`

export async function WeatherApi() {
    let response;
    try {
        response = await axios.get(url).then((res)=>console.log(res.data))
        .catch((e) => {throw new Error(e)})
        //console.log(response.data)
    } catch (e) {
        console.log(e)
    }
    console.log(response)
}