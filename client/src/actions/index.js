import axios from 'axios';

import {
  FETCH_USER,
  FETCH_POSTS,
  INCREMENT_POSTS,
  USER_POST,
  DELETE_POSTS,
  INC_DELETE
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log('fetchUser', res);

  dispatch({ type: FETCH_USER, payload: { username: res.data.username } }); //res.data });
};

export const fetchPosts = numPosts => async dispatch => {
  const res = await axios.get(`/api/posts/1/${numPosts}`);

  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const incrementPosts = () => dispatch => {
  dispatch({ type: INCREMENT_POSTS });
};

export const submitPost = (values, history, postNumber) => async dispatch => {
  await axios.post('/api/posts', values);

  dispatch(incrementPosts());
  dispatch(fetchPosts(postNumber + 1));
  dispatch(showUserPost(values));
  history.push('/');
  dispatch({ type: FETCH_USER, payload: null });
};

export const deletePosts = () => dispatch => {
  dispatch({ type: DELETE_POSTS });
};

export const showUserPost = () => dispatch => {
  dispatch({
    type: USER_POST,
    payload: [{ username: 'test', image_url: 'placeholder' }]
  });
};
