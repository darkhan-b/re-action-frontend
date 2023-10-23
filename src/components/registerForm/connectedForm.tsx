import { connect } from 'react-redux';

import {
  startRegistration,
  registrationSuccess,
  registrationError,
} from '../../store/actions/authAction';
import { RegistrationState } from '../../store/reducers/authReducer';

import { RegisterForm } from './registerForm';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: { authReducer: RegistrationState }) => {
  return {
    isSuccess: state.authReducer.isSuccess,
  };
};
const mapDispatchToProps = {
  startRegistration,
  registrationSuccess,
  registrationError,
};

const ConnectedRegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default ConnectedRegisterForm;
