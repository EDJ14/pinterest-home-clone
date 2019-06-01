import axios from 'axios';

import { FETCH_USER, FETCH_POSTS, INCREMENT_POSTS, USER_POST } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = numPosts => async dispatch => {
  const res = await axios.get(`/api/posts/1/${numPosts}`);

  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const incrementPosts = () => dispatch => {
  dispatch({ type: INCREMENT_POSTS });
};

export const submitPost = (values, history) => async dispatch => {
  const res = await axios.post('/api/posts', values);

  dispatch(incrementPosts());
  dispatch(showUserPost(values));
  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const showUserPost = ({ title, body }) => dispatch => {
  dispatch({ type: USER_POST, payload: { title, body } });
};
