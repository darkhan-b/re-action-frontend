import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/named
import { Dispatch } from 'redux';

const useAppDispatch = (): Dispatch => useDispatch();

export default useAppDispatch;
