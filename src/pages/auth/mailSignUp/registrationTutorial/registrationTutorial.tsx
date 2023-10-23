import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';

import { Button } from '../../../../components/button';

import styles from './registrationTutorial.module.scss';

export const RegistrationTutorial = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.regTutorial}>
      <div>
        <Button
          text={'Как зарегестрироваться?'}
          onClick={() => setOpen(!open)}
          aria-controls="sign-up-video"
          aria-expanded={open}
        />
      </div>

      <Collapse in={open}>
        <div id="sign-up-video">Как зарегестрироваться?</div>
      </Collapse>
    </div>
  );
};
