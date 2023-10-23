import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// @ts-ignore
import logo from '../../assets/images/re-action.png';

import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Navbar expand="lg" className={styles.flex}>
        <Navbar.Brand href="/" className={styles.logo}>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <div className={styles.scroll}>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ border: 'none', outline: 'none' }}
          >
            <i className="fa-solid fa-bars" style={{ color: '#ff735c' }}></i>
          </Navbar.Toggle>
          <p className={styles.p}>Menu</p>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/login" className={styles.link}>
              Вход
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
