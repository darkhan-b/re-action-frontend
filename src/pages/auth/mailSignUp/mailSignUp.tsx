import { useEffect } from 'react';

import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { apiAuth } from '../../../api/api-auth';
import { DataOAuthType } from '../../../api/types';
import { RegisterForm } from '../../../components/registerForm';

import styles from './mailSignUp.module.scss';
import { RegistrationTutorial } from './registrationTutorial';

export const MailSignUp = (): JSX.Element => {
  useEffect(() => {
    const url = window.location.href;
    const parsed = queryString.parseUrl(url);
    const myParam = parsed.query.code;
    const data: DataOAuthType = {
      access_token: myParam,
    };

    apiAuth
      .sendToken(data)
      .then(() => {
        alert('good');
      })
      .catch(() => {
        alert('error');
      });
  }, []);

  return (
    <div className={styles.signUp}>
      <RegistrationTutorial />
      <div className={styles.form}>
        <h1 className={styles.title}>Регистрация</h1>
        <span>
          Уже зарегестрированы?{' '}
          <Link to="/log-in" className={styles.link}>
            Войдите
          </Link>
          .
        </span>

        <RegisterForm />

        <span className={styles.agreement}>
          Используя сервис service.re-action.online вы соглашаетесь со всеми условиями и
          принимаете публичную офферту, расположенную на сайте{' '}
          <a href="https://re-action.online/" className={styles.link}>
            Re-Action.Online
          </a>
        </span>
      </div>
    </div>
  );
};
