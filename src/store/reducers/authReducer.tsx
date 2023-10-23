export enum RegistrationActionTypes {
  START_REGISTRATION = 'START_REGISTRATION',
  REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR = 'REGISTRATION_ERROR',
}

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

export interface RegistrationAction {
  type: RegistrationActionTypes;
}

const registrationReducer = (
  state = initialState,
  action: RegistrationAction,
): RegistrationState => {
  switch (action.type) {
    case RegistrationActionTypes.START_REGISTRATION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case RegistrationActionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case RegistrationActionTypes.REGISTRATION_ERROR:
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

export default registrationReducer;
