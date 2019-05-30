import { INCREMENT_POSTS } from '../actions/types';

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT_POSTS:
      return state + 1;
    default:
      return state;
  }
}
