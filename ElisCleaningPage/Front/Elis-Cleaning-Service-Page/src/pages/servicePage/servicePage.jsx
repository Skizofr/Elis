import styles from "./servicePage.module.css"
import NJ from "../../assets/img/image.webp"
import Logo from "../../assets/img/Capa 1.png"
import { Service } from "../../components/servicesp/service"
import { Service2 } from "../../components/servicesp/service2"
import { Link } from "react-router-dom"
import React from 'react'

export const ServicePage = () => {
  return (
    <section className={styles.container}>
       <div className={styles.intro}>
        <img src={Logo} alt="Logo" width={"100%"} height={""} />
       </div>
       <div className={styles.service}>
       </div>
        <Service text="Especializados en limpieza tanto de locales como de viviendas." img={NJ} className={styles.square1}/>
        <Service2 text="Con los productos mas competentes para una impecabilidad asegurada" img={NJ} className={styles.square2}/>
        <Service text="Disponibilidad horaria completa" img={NJ} className={styles.square3}/>  
    <Link to="/"  className={styles.contact}>
      <button className={styles.button}>Contact!</button>
    </Link>
    </section>
  )
}
