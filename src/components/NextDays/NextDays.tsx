import { useState, useEffect } from 'react';
import './nextDays.css';
import { useSelector } from 'react-redux';


export const NextDays = () => {
    // const [days, setDays] = useState();
    // const dailyWeather = useSelector((state: any) => state.weather.dailyWeather);
    // console.log(dailyWeather);
    

    // useEffect(() => {
    //     if (dailyWeather) {
    //         const next5DaysData = dailyWeather.list.slice(1,6);
    //         setDays(next5DaysData);
    //     }
    // }, [days, dailyWeather]);


  return (
    <div className='dayCard'>
        <span className='day'>07.08</span>
        <div className='degree'>
            <p>27&deg;C</p>
            <img src="" alt="icon" />
        </div>
    </div>

  )
}
