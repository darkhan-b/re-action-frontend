import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { apiAuth } from '../../api/api-auth';
import { RegisterFormDataType } from '../../api/types';
import useAppDispatch from '../../common/hooks/useAppDispatch';
import {
  startRegistration,
  registrationSuccess,
  registrationError,
} from '../../store/actions/authAction';
import { Button } from '../button';

import styles from './registerForm.module.scss';

const schema = yup.object({
  email: yup
    .string()
    .email('Введите адрес электронной почты')
    .required('Заполните это поле'),
  password1: yup.string().required('Пожалуйста заполните поле с паролем'),
  password2: yup
    .string()
    .oneOf([yup.ref('password1')])
    .required('Пожалуйста заполните поле с паролем'),
});

export const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormDataType>({
    defaultValues: { email: '', password1: '', password2: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFormDataType): Promise<void> => {
    dispatch(startRegistration());

    try {
      const response = await apiAuth.registration(data);

      // eslint-disable-next-line no-magic-numbers
      if (response.status === 201) {
        dispatch(registrationSuccess());
        alert('Успешно зарегистрировано');
      } else {
        dispatch(registrationError());
        alert('Ошибка при регистрации');
      }
    } catch (error) {
      dispatch(registrationError());
      alert('Ошибка при регистрации');
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.signUpForm}>
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
      <div className={classNames(styles.passwordWrapper, styles.inputWrapper)}>
        <label htmlFor="password" className={styles.label}>
          Пароль
        </label>
        <input
          type="password"
          id="password"
          placeholder="Пароль"
          {...register('password1')}
          className={styles.passwordInput}
        />
        <span className={styles.errorMessage}>{errors.password1?.message}</span>
      </div>
      <div className={classNames(styles.inputWrapper)}>
        <label htmlFor="password" className={styles.label}>
          Пароль (еще раз)
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Пароль (еще раз)"
          {...register('password2')}
          className={styles.passwordInput}
        />
        <span className={styles.errorMessage}>{errors.password2?.message}</span>
      </div>

      <div className={styles.buttonWrapper}>
        <Button text={'Регистрация'} type={'submit'} />
      </div>
    </form>
  );
};
