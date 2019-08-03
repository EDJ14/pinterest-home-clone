import { INCREMENT_POSTS, DELETE_POSTS } from '../actions/types';

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT_POSTS:
      return state + 1;
    case DELETE_POSTS:
      return 0;
    default:
      return state;
  }
}
