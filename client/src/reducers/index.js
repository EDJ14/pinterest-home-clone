import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import incPostReducer from './incPostReducer';
import { reducer as reduxForm } from 'redux-form';
//import userPostReducer from './userPostReducer';

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  postNumber: incPostReducer,
  form: reduxForm
});
