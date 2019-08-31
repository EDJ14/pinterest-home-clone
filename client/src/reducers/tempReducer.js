import { TEMP_FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case TEMP_FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
