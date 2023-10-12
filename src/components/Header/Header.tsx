import './header.css';
import { useDispatch } from 'react-redux';
import { setData, setDegreeType, setCity } from '../../actions/WeatherAction';


export const Header= () => {
  const dispatch = useDispatch();

  let data: string;
  

  const handleInput = (e: any) => {
    e.preventDefault();
    data = e.target.value;
  }

  const getCity = () => {
    dispatch(setCity(data));
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=b7e7f4fd35d3db0c1f437221a1012824&units=metric`)
        .then(res => res.json())
        .then(result => {
            if(result.cod !== '404') {
              dispatch(setData(result));
              console.log(result);
            } else {
              alert("Can't find that city")
            }
        });
    }

  const switchDegree = (e: any) => {
    const data = e.target.value;
    dispatch(setDegreeType(data));
    console.log(data);
  }

  return (
    <header>
        <div className='search-bar'>
            <input type="text" name="search" onChange={handleInput}/>
            <button onClick={getCity}>Search City</button>
        </div>
        <div className='switcher'>
            <input type="radio" name="switch" id="c" value='C' onClick={switchDegree}/>
            <label htmlFor="c">&deg;C</label>
            <input type="radio" name="switch" id="f" value='F' onClick={switchDegree}/>
            <label htmlFor="f">&deg;F</label>
        </div>
    </header>
  )
}


