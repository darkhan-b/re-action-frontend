import { createSlice } from '@reduxjs/toolkit';

export interface RegistrationState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: RegistrationState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    startRegistration: state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    registrationSuccess: state => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    },
    registrationError: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const { startRegistration, registrationSuccess, registrationError } =
  registrationSlice.actions;

export default registrationSlice.reducer;
