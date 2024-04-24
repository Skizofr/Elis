import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/img/Elis Cleaning Services (2).svg"
import styles from './header.module.css';
import loadIonicons from './headercomp';

export const HeaderLogic = () => {
  useEffect(() => {
    loadIonicons();
  }, []);
  const location = useLocation();

  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const calculateIndicatorPosition = () => {
    const selectedElement = document.querySelector(`.${styles.abt}`);
    if (selectedElement) {
      const indicatorPosition = selectedElement.offsetLeft;
      setIndicatorPosition(indicatorPosition);
    }
  };

  useEffect(() => {
    calculateIndicatorPosition();
  }, [location.pathname]);
  return (
    <section className={styles.container}>
      <ul>
      {/* <div className={styles.intro}>
        <img src={Logo} alt="Logo" width={"100%"} height={""} />
      </div> */}
        
        <li className={location.pathname === "/service" ? styles.abt : styles.list}>

          <Link to="/service" className={styles.link}>

            <span className={styles.icon}>
              <ion-icon name="help-outline" ></ion-icon>
            </span>
            
            <span className={styles.text}>About</span>
          </Link>
        </li>

        <li className={location.pathname === "/" ? styles.abt : styles.list}>
          <Link to="/" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={styles.text}>Home</span>
          </Link>
        </li>

        <li className={location.pathname === "/contact" ? styles.abt : styles.list}>
          <Link to="/contact" className={styles.link}>
            <span className={styles.icon}>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span className={styles.text}>Contact</span>
          </Link>
        </li>

        
        {/* <div className={styles.indicator} style={{ left: `${indicatorPosition}px` }}></div> */}
      </ul>
    </section>
  )
};

