import './App.css';

import Weather from './components/Weather';
import React,{ useState } from 'react';
import fetchWeather from './components/fetchWeather';
export default function App() {
  const [query, setQuery] = useState('');
  const [we, setWeather] = useState([]);
  let weather
  fetchWeather("Toronto").then(data => (weather = data));
  console.log(weather)
  return (
    <p>{weather.sys.sunrise}</p>
  )
}