import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import registrationReducer from './slices/registrationSlice';
import resetPasswordReducer from './slices/resetPassword';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    resetPassword: resetPasswordReducer,
    auth: authReducer,
  },
});

export default store;
