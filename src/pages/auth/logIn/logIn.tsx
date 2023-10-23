import { useNavigate, Link } from 'react-router-dom';

import { HeadHunterLogo } from '../../../assets/images/HeadHunterLogo';
import { Button } from '../../../components/button';

import styles from './logIn.module.scss';
import { MailLogIn } from './mailLogIn';

export const LogIn = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.logIn}>
      <h1 className={styles.title}>Войти</h1>
      <Button
        text={'Войти в 1 клик'}
        icon={<HeadHunterLogo />}
        onClick={() => navigate('/hh-log-in')}
      />
      <div className={styles.mailAuthorization}>
        <MailLogIn />
        <Link to="/sign-up" className={styles.mailLogIn}>
          Зарегестрироваться по e-mail
        </Link>
      </div>
      <div className={styles.agreementContainer}>
        <hr />
        <span className={styles.agreement}>
          Используя сервис, вы соглашаетесь со всеми условиями его использования и
          публичной офертой, расположенных по адресу
        </span>
        <a href="https://www.re-action.online/" className={styles.href}>
          www.re-action.online
        </a>
      </div>
    </div>
  );
};
