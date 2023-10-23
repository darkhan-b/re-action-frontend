// eslint-disable-next-line import/named
import { Action } from 'redux';

export enum AuthActionTypes {
  START_LOGIN = 'START_LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export interface AuthAction extends Action {
  type: AuthActionTypes;
}
``;
