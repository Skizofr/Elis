import styles from "./header.module.css"
import React from 'react'

export const Header = () => {
  return (
    <section className={styles.container}>
      hola
      <div className={styles.headerLeft}></div>
      <div className={styles.headerMid}></div>
      <div className={styles.headerRight}></div>
    </section>
  )
}
