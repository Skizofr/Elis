import styles from "./aboutPage.module.css"
import { Link } from "react-router-dom"
import React from 'react'

export const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}><p>Who?</p></div>

      <div className={styles.about}>
        <p className={styles.text}>Somos una empresa de limpieza con sede en Nueva Jersey, dedicada a proporcionar servicios de limpieza excepcionales para una variedad de locales y viviendas.  Desde oficinas hasta residencias, nos especializamos en mantener espacios impecables y acogedores.Nuestro equipo altamente capacitado utiliza técnicas y productos de limpieza de vanguardia para garantizar resultados sobresalientes en cada tarea. Ya sea que necesite limpieza regular o una limpieza profunda, estamos comprometidos a satisfacer sus necesidades con eficiencia y profesionalismo. ¡Deje que nuestro equipo se encargue de mantener su espacio impecable para que usted pueda disfrutar de un ambiente limpio y saludable en todo momento!</p>
      </div>

    <Link to="/"  className={styles.contact}>
      <button className={styles.button}>Contact!</button>
    </Link>
    </section>
  )
}
