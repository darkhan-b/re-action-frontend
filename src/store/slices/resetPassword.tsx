import { createSlice } from '@reduxjs/toolkit';

export interface ResetState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: ResetState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    startReset: state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    resetSuccess: state => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    },
    resetError: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const { startReset, resetSuccess, resetError } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
