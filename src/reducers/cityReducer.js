import * as types from '../actions/actionTypes';

export default function cityReducer(state=[], action) {
  switch(action.type) {
    case types.CREATE_CITY:
      return [...state, Object.assign({}, action.city)];

    case types.LOAD_CITIES_SUCCESS:
      return action.cities;

    default:
      return state;
  }
}
