import { ReactNode } from 'react';

import { Button as BootstrapButton } from 'react-bootstrap';

import styles from './button.module.scss';

type ButtonType = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};
export const Button = ({ text, icon, onClick, type }: ButtonType): JSX.Element => {
  return (
    <BootstrapButton
      variant="primary"
      className={styles.buttonEnter}
      onClick={onClick}
      type={type}
    >
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      {text}
    </BootstrapButton>
  );
};
