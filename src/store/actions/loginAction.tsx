// eslint-disable-next-line import/named
import { Action } from 'redux';

export const startLogin = (): Action => ({
  type: 'START_LOGIN',
});

export const loginSuccess = (): Action => ({
  type: 'LOGIN_SUCCESS',
});

export const loginError = (): Action => ({
  type: 'LOGIN_ERROR',
});
