import { useSelector } from 'react-redux';

import { RegistrationState } from '../../store/reducers/authReducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useAppSelector = () => {
  return useSelector((state: RegistrationState) => state);
};

export default useAppSelector;
