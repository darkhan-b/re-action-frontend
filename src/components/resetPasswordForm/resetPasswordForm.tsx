import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ResetPasswordType } from '../../api/types';
import useAppDispatch from '../../common/hooks/useAppDispatch';
import { startLogin, loginSuccess, loginError } from '../../store/actions/loginAction';
import { Button } from '../button';

import styles from './logInForm.module.scss';

import { apiAuth } from 'api/api-auth';

const schema = yup.object({
  email: yup
    .string()
    .email('Введите адрес электронной почты')
    .required('Заполните это поле'),
});

export const resetPasswordForm = (): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<ResetPasswordType>({
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ResetPasswordType): Promise<void> => {
    dispatch(startLogin());

    try {
      const response = await apiAuth.resetPassword(data);

      // eslint-disable-next-line no-magic-numbers
      if (response.status === 200) {
        dispatch(loginSuccess());
        alert('Успешно зарегистрировано');
      } else {
        dispatch(loginError());
        alert('Ошибка при регистрации');
      }
    } catch (error) {
      dispatch(loginError());
      alert('Ошибка при регистрации');
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.logInForm}>
      <div className={styles.inputWrapper}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="E-mail адрес"
          {...register('email')}
          className={styles.emailInput}
        />
        <span className={styles.errorMessage}>{errors.email?.message}</span>
      </div>
      <div className={styles.enter}>
        <div className={styles.buttonWrapper}>
          <Button text={'Восстановить пароль'} type={'submit'} />
        </div>
      </div>
    </form>
  );
};
