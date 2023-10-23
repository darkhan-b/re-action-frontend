import axios from 'axios';

import {
  DataOAuthType,
  LoginFormDataType,
  RegisterFormDataType,
  ResetPasswordType,
} from './types';

const instance = axios.create({
  baseURL: 'https://testf.re-action.online/api/v1/',
  withCredentials: true,
});

export const apiAuth = {
  registration(data: RegisterFormDataType) {
    return instance.post('auth/registration/', data);
  },
  sendToken(data: DataOAuthType) {
    return instance.post('auth/hh/login_rest', data);
  },
  loginAuth(data: LoginFormDataType) {
    return instance.post('auth/login/', data);
  },
  resetPassword(data: ResetPasswordType) {
    return instance.post('auth/password/reset', data);
  },
};
