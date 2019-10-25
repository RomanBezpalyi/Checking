/* eslint-disable */

import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
  refreshUserRequest,
  logOutRequest,
  logOutSuccess,
  logOutError,
  refreshUserSuccess,
  refreshUserError,
} from './sessionActions';
import { getToken } from './sessionSelectors';

axios.defaults.baseURL = 'https://cheking.goit.co.ua/api/v1/auth';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
    .post('/register', credentials)
    .then(response => dispatch(signUpSuccesss(response.data.user)))
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('/login', credentials)
    .then(response => dispatch(signInSuccesss(response.data.user)))
    .catch(error => dispatch(signInError(error.response.data)));
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  setAuthToken(token);cd 
  dispatch(refreshUserRequest());
  axios
    .get('finance', token)
    .then(response => dispatch(refreshUserSuccess(response.data)))
    .catch(error => dispatch(refreshUserError(error.message)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(logOutRequest());

  const token = getToken(getState());
  if (!token) return;
  setAuthToken(token);

  axios
    .get('logout')
    .then(() => {
      dispatch(logOutSuccess());
      clearAuthToken();
    })
    .catch(error => {
      dispatch(logOutError(error));
    });
};
