import * as types from './actionTypes';

export function createCity(city) {
  return { type: types.CREATE_CITY, city};
}
