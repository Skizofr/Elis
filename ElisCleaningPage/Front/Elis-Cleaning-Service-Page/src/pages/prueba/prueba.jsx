import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../components/header/header.module.css';
import loadIonicons from '../../components/header/headercomp';
import activelink from '../../components/header/activelink';

export const Prueba = () => {
  useEffect(() => {
    loadIonicons();
  }, []);

  useEffect(() => {
    activelink();
  }, []); // Empty array as dependency to run only once on component mount

  return (
    <section className={styles.container}>
      <ul>
        <li className={styles.abt}>
          <Link to="#" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="help-outline"></ion-icon>
            </span>
            <span className={styles.text}>About</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="#" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={styles.text}>Home</span>
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="#" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span className={styles.text}>Contact</span>
          </Link>
        </li>
        <div className={styles.indicator}></div>
      </ul>
    </section>
  );
};
