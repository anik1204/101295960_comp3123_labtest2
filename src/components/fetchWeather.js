import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '9718c10a62ee1f126fa68c805c4d6b1c'
const ICON_URL = 'https://openweathermap.org/img/w'

const fetchWeather = async (query) =>{
    const { data } = await axios.get(API_URL,{
        params:{
            q:query,
            units:'metric', 
            APPID:API_KEY
        }
    });
    console.log(data);
    return JSON.stringify(data);
}

export default fetchWeather;