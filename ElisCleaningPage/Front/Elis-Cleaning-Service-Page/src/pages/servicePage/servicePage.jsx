import styles from "./servicePage.module.css"
import Logo from "../../assets/img/Elis Cleaning Services.png"
import { Service } from "../../components/servicesp/service"
import React from 'react'

export const ServicePage = () => {
  return (
    <section className={styles.container}>
       <div className={styles.intro}>
        <img src={Logo} alt="Logo" width={"100%"} height={""}/>
       </div>
       <div className={styles.service}>
        <Service/>
       </div>
    </section>
  )
}
