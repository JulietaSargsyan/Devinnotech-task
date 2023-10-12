import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentDayWeather } from './components/CurrentDayWeather/CurrentDayWeather';
import { Header } from './components/Header/Header';
import { Hourly } from './components/Hourly/Hourly';
import { NextDays } from './components/NextDays/NextDays';
import { setHourlyData, setInitialData, setDailyData } from './actions/WeatherAction';


type Location = {
  lat: number;
  lon: number;
};

function App() {
  const [location, setLocation] = useState<Location>({ lat: 0, lon: 0 });
  const city = useSelector((state: any) => state.weather.city);
  console.log(city);
  
  // function getCurrentDate(separator=''){

  //   let myCurrentDate = new Date()
  //   let date = myCurrentDate.getDate();
  //   let month = myCurrentDate.getMonth() + 1;
  //   let year = myCurrentDate.getFullYear();

  //   console.log(`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`);
    
    
  //   return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  // }


const dispatch = useDispatch();

// Fetch data for current weather
useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7e7f4fd35d3db0c1f437221a1012824&units=metric`)
    .then(res => res.json())
    .then(result => {
        dispatch(setInitialData(result));
        console.log(result);
        
    })
    .catch((error) => {
      console.error('Error fetching initial data:', error);
    });
}, []);


// Fetch data for hourly forcast
useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7e7f4fd35d3db0c1f437221a1012824`)
      .then((response) => response.json())
      .then((data) => {
        const lat = data.coord.lat;
        const lon = data.coord.lon;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely,current,alerts&units=metric&appid=b7e7f4fd35d3db0c1f437221a1012824`)
          .then((response) => response.json())
          .then((data) => {
            dispatch(setHourlyData(data))
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching city coordinates:', error);
    });
}, [city]);


// Fetch data for daily weather
useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b7e7f4fd35d3db0c1f437221a1012824&units=metric`)
    .then(res => res.json())
    .then(result => {
        // const dailyData = result.daily.slice(1, 6)
        dispatch(setDailyData(result));
        console.log(result);
    })
    .catch((error) => {
      console.error('Error fetching initial data:', error);
    });
}, [city]);



  return (
    <div className="App">
      <Header />
      <main>
        <div className='current'>
          <CurrentDayWeather />
          <Hourly />
        </div>
        <div className='next'>
          <NextDays />
          <NextDays />
          <NextDays />
          <NextDays />
          <NextDays />
        </div>
      </main>
    </div>
  );
}

export default App;
