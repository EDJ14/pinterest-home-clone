import { FETCH_POSTS, USER_POST, DELETE_POSTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, action.payload] || false;
    case USER_POST:
      return [action.payload, ...state] || false;
    case DELETE_POSTS:
      return [];
    default:
      return state;
  }
}
