import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { weatherReducer } from '../reducers/WeatherReducer'


const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
