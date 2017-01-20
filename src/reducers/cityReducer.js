import * as types from '../actions/actionTypes';

export default function cityReducer(state=[], action) {
  switch(action.type) {
    case types.CREATE_CITY:
      return [...state, Object.assign({}, action.city)];

    default:
      return state;
  }
}
