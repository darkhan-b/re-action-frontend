import { AuthActionTypes, AuthAction } from '../actions/authActionTypes';

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

const loginReducer = (state = initialAuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.START_LOGIN:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
