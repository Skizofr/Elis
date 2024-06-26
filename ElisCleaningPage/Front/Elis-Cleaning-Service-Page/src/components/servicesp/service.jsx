import styles from "./service.module.css"
import React from 'react'

export function Service  ({text, img}) {
  return (
    <section className={styles.container}>

        <div className={styles.text}>
            <p>{text}</p>
        </div>
        <br></br>
        <img src={img} alt="Img" width={"100px"} height={"100px"} className={styles.img}/>

    </section>
  )
}
