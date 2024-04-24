import styles from "./homepage.module.css"
import NJ from "../../assets/img/4568159-min-1200x834.jpg.webp"
import Hourglass from "../../assets/icons/hourglass-outline.svg"
import Diamond from "../../assets/icons/diamond-outline.svg"
import Logo from "../../assets/img/Elis Cleaning Services (2).svg"
import { Service } from "../../components/servicesp/service"
import { Service2 } from "../../components/servicesp/service2"
import { Contact } from "../../components/buttons/contact"
import React from 'react'

export const Homepage = () => {
  return (
    <section className={styles.container}>

        <hr className={styles.line}></hr>
        <div className={styles.intro}>
        <img src={Logo} alt="Logo" width={"100%"} height={""} />
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.service}>
        </div>
        <Service text="Especializados en limpieza tanto de locales como de viviendas." img={NJ} className={styles.square1}/>
        <hr className={styles.line2}></hr>
        <Service2 text="Con los productos mas competentes para una impecabilidad asegurada" img={Diamond} className={styles.square2}/>
        <hr className={styles.line2}></hr>
        <Service text="Disponibilidad horaria completa" img={Hourglass} className={styles.square3}/>
        <Contact/>

    </section>
  )
}
