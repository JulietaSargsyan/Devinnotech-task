import { useState, useEffect } from 'react';
import './hourly.css'
import { useSelector } from 'react-redux';

export const Hourly = () => {
    const [hourly, setHourly] = useState([]);
    const hourlyWeather = useSelector((state: any) => state.weather.hourlyWeather);
    const currentHour = new Date().getHours();

    useEffect(() => {
        if (hourlyWeather) {
            console.log(hourlyWeather);
            const next8HourData = hourlyWeather.hourly
                .filter((hour: any) => {
                const hourOfDay = new Date(hour.dt * 1000).getHours();
                return hourOfDay >= currentHour;
            }).slice(0, 8); 
            setHourly(next8HourData);
            console.log(next8HourData);
        }
    }, [hourlyWeather, currentHour]);


    return (
        <ul className='hourlyList'>
        {hourly.map((hour: any, index) => (
            <li key={index}>
                <p>
                    {new Date(hour.dt * 1000).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    })} {Math.round(hour.temp)}°C
                </p>
                <img src={"http://openweathermap.org/img/w/" + hour.weather[0].icon + ".png"} alt="" />
            </li>
        ))}
        </ul>
    )
}


