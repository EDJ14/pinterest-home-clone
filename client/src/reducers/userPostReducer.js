import { USER_POST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case USER_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
