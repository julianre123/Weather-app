import { DateTime } from "luxon";

const API_KEY = "08ebc8b79e965da745da4d309484000b";
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType,seatchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...seatchParams, appid:API_KEY})

    return fetch(url).then((res) => res.json())
}

const formatCurrentWeather = (data) => {
const {
    coord:{lat, lon},
    main:{temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys:{country, sunrise, sunset},
    weather,
    wind:{speed}
} = data


const {main:details, icon} = weather[0]

return {lat, lon, temp ,feels_like, temp_min, temp_max, humidity, 
    name, dt, country, sunrise, sunset, details, icon, speed}
}




const getFormattedWeatherData =async (searchParams) => {
const formattedCurrentWeather = await getWeatherData('weather', searchParams)
.then(formatCurrentWeather);

const {lat, lon}= formattedCurrentWeather

const formattedForecastWeather = await getWeatherData('forecast', {
     lat, 
     lon, 
     exclude: 'current,minutely,alerts', 
     units: searchParams.units
})


return formattedCurrentWeather
}


const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconUrlFromCode = (code) => 
`http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;
export {formatToLocalTime, iconUrlFromCode}