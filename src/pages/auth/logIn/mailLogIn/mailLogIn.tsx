import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';

import { LogInForm } from '../../../../components/logInForm';

import styles from './mailLogIn.module.scss';

export const MailLogIn = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p
        className={styles.mailLogIn}
        onClick={() => setOpen(!open)}
        aria-controls="log-in-collapse"
        aria-expanded={open}
      >
        Войти по e-mail
      </p>
      <Collapse in={open}>
        <div id="log-in-collapse" className={styles.collapse}>
          <LogInForm />
        </div>
      </Collapse>
    </>
  );
};
