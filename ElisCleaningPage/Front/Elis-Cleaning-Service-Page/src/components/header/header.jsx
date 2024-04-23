import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import loadIonicons from "./headercomp";
import React, { useEffect } from 'react';

export const Header = () => {
  useEffect(() =>{
    loadIonicons();
  },[]);
  
  const location = useLocation();

  return (
    <section className={styles.container}>
      <ul>
        <li className={location.pathname === "/contact" ? styles.abt : styles.list}>
          <Link to="/contact" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="help-outline" ></ion-icon>
            </span>
            <span className={styles.text}>About</span>
          </Link>
        </li>

        <li className={location.pathname === "/service" ? styles.abt : styles.list}>
          <Link to="/service" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={styles.text}>Home</span>
          </Link>
        </li>

        <li className={location.pathname === "/" ? styles.abt : styles.list}>
          <Link to="/" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span className={styles.text}>Contact</span>
          </Link>
        </li>

        <div className={styles.indicator}></div>
      </ul>
    </section>
  )
}

