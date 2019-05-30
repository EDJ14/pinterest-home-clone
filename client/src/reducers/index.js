import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import incPostReducer from './incPostReducer';

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  postNumber: incPostReducer
});
