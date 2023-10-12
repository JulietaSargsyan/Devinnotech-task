import './currentDayWeather.css'
import { useSelector } from 'react-redux';

export const CurrentDayWeather = () => {
  const currentWeather = useSelector((state: any) => state.weather.currentWeather);

  let iconurl;
  if(currentWeather) {
    iconurl = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png"
  }

  return (
    < >
      {currentWeather && (
        <div className='currentDayWeather__container'>
          <h1>{currentWeather.name}</h1>
          <p className='degree'>{Math.floor(currentWeather.main.temp)}°C</p>
          <img src={iconurl} alt="" />
          <p className='description'>{currentWeather.weather[0].main}</p>
        </div>
      )}
    </>
  );
}

