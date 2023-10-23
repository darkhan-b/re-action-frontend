// eslint-disable-next-line import/named
import { Action } from 'redux';

export const resetRegistration = (): Action => ({
  type: 'START_RESET',
});

export const resetSuccess = (): Action => ({
  type: 'RESET_SUCCESS',
});

export const resetError = (): Action => ({
  type: 'RESET_ERROR',
});
