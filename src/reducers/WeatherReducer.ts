const initialState = {
    currentWeather: null,
    hourlyWeather: null,
    dailyWeather: null,
    degreeType: 'c',
    city: 'Yerevan'
  };

  
  export const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_CURRENT_WEATHER':
        return {
          ...state,
          currentWeather: action.payload,
        };
      case 'SET_DEGREE_TYPE':
        return {...state, degreeType: action.payload}
      case 'SET_INITIAL_DATA': 
        return {
          ...state, 
          currentWeather: action.payload,
        };
      case 'SET_HOURLY_WEATHER':
        return {
          ...state,
          hourlyWeather: action.payload
        }
      case 'SET_CITY':
        return {
          ...state,
          city: action.payload
        }
      case 'SET_DAILY_WEATHER':
        return {
          ...state,
          dailyWeather: action.payload
        }
      default:
        return state;
    }
  };


  
