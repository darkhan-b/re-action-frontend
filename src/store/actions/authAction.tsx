// eslint-disable-next-line import/named
import { Action } from 'redux';

export const startRegistration = (): Action => ({
  type: 'START_REGISTRATION',
});

export const registrationSuccess = (): Action => ({
  type: 'REGISTRATION_SUCCESS',
});

export const registrationError = (): Action => ({
  type: 'REGISTRATION_ERROR',
});
