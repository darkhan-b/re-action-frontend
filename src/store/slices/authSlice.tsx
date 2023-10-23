import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialAuthState: AuthState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    startLogin: state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    loginSuccess: state => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    },
    loginError: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const { startLogin, loginSuccess, loginError } = authSlice.actions;

export default authSlice.reducer;
