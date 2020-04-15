import { createStore, combineReducers } from "redux";

function getWeather(state = { data: [], error: null, loading: true }, action) {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, loading: true };
    case "GET_WEATHER_SUCCESS":
      return { ...state, loading: false, data: action.data , error: null};
    case "GET_WEATHER_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

function getWeatherFive(state = { data: [], error: null, loading: true }, action) {
    switch (action.type) {
      case "GET_WEATHER_FIVE":
        return { ...state, loading: true };
      case "GET_WEATHER_FIVE_SUCCESS":
        return { ...state, loading: false, data: action.data , error: null};
      case "GET_WEATHER_FIVE_ERROR":
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }

const reducers = combineReducers({
  getWeather,
  getWeatherFive
});

let store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

export default store;
