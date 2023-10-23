import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoginFormDataType } from '../../api/types';
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
  password: yup.string().required('Заполните это поле'),
});

export const LogInForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormDataType>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormDataType): Promise<void> => {
    dispatch(startLogin());

    try {
      const response = await apiAuth.loginAuth(data);

      // eslint-disable-next-line no-magic-numbers
      if (response.status === 200) {
        dispatch(loginSuccess());
        alert('Успешно вошли');
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
    <Row>
      <Col className="w-50">
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
          <div className={classNames(styles.inputWrapper, styles.passwordWrapper)}>
            <label htmlFor="password" className={styles.label}>
              Пароль
            </label>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              {...register('password')}
              className={styles.passwordInput}
            />
            <span className={styles.errorMessage}>{errors.password?.message}</span>
          </div>
          <Row className={styles.checkboxWrapper}>
            <Form.Check
              type="checkbox"
              id={`default-checkbox`}
              className={styles.checkForm}
            />
            <label htmlFor={`default-checkbox`} className={styles.checkLabel}>
              Запомнить меня
            </label>
          </Row>
          <div className={styles.enter}>
            <a
              href="https://service.re-action.online/accounts/password/reset/"
              className={classNames(styles.passwordForgot)}
            >
              Забыли пароль?
            </a>
            <div className={styles.buttonWrapper}>
              <Button text={'Войти'} type={'submit'} />
            </div>
          </div>
        </form>
      </Col>
    </Row>
  );
};
