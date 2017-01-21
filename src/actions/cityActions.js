import * as types from './actionTypes';
import WeatherApi from '../RestHelper';

export function createCity(city) {
  return { type: types.CREATE_CITY, city};
}

export function loadCitiesSuccess(cities) {
  return {type: types.LOAD_CITIES_SUCCESS, cities};
}

export function loadCities() {
  return (dispatch) => {
    return WeatherApi.getAllCities().then(cities => {
      //console.log(resp);
      dispatch(loadCitiesSuccess(cities));
    }).catch(error => {
      throw(error);
    });
  };
}
