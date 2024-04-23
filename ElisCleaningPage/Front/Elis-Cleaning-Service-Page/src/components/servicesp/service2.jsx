import styles from "./service.module.css"
import React from 'react'

export function Service2  ({text, img}) {
  return (
    <section className={styles.container}>

        <img src={img} alt="Img" width={"100px"} height={"100px"} className={styles.img}/>
        <br></br>
        <div className={styles.text}>
            <p>{text}</p>
        </div>

    </section>
  )
}
