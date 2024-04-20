import styles from "./service.module.css"
import NJ from "../../assets/img/image.webp"
import React from 'react'

export function Service  (Text, Img) {
  return (
    <section className={styles.container}>

        <div className={styles.text}>
            <p>Especializados en limpieza tanto de locales como de viviendas.</p>
        </div>
        <br></br>
        <img src={NJ} alt="NJ" width={"120px"} height={"120px"} className={styles.img}/>

    </section>
  )
}
