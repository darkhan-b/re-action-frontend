export enum ResetPasswordActionTypes {
  START_RESET = 'START_REGISTRATION',
  RESET_SUCCESS = 'REGISTRATION_SUCCESS',
  RESET_ERROR = 'REGISTRATION_ERROR',
}

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

export interface ResetAction {
  type: ResetPasswordActionTypes;
}

const resetPasswordReducer = (state = initialState, action: ResetAction): ResetState => {
  switch (action.type) {
    case ResetPasswordActionTypes.START_RESET:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case ResetPasswordActionTypes.RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case ResetPasswordActionTypes.RESET_ERROR:
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

export default resetPasswordReducer;
