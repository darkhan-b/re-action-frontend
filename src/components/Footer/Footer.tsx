import React from 'react';

import { Link } from 'react-router-dom';

// @ts-ignore
import cats from '../../assets/images/Cats.jpg';

import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.flex}>
            <img src={cats} alt="" />
            <div className={styles.text}>
              <p className={styles.p}>Команда</p>
              <p className={styles.big}>re-action</p>
              <p className={styles.p}>помогает быстро найти работу и любит котиков</p>
            </div>
          </div>

          <div className={styles.column}>
            <p className={styles.h2}>Напишите нам</p>
            <div className={styles.flexs}>
              <Link
                to="/"
                style={{ textDecoration: 'none', color: '#000' }}
                className={styles.email}
              >
                <i className="fa-solid fa-envelope"></i>
                <p>info@re-action.online</p>
              </Link>
            </div>
            <div className={styles.flexs}>
              <Link
                to="/"
                style={{ textDecoration: 'none', color: '#000' }}
                className={styles.email}
              >
                <i className="fa-brands fa-telegram"></i>
                <p>Поддержка</p>
              </Link>
            </div>
            <p className={styles.h2}>Остальное</p>
            <Link
              to="/"
              style={{ textDecoration: 'none', color: '#000' }}
              className={styles.email}
            >
              Тарифы
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
