import styles from "./homepage.module.css"
import { Form } from "../../components/form/form"
import telephone from "../../assets/icons/phone-receiver-silhouette.png"
import email from "../../assets/icons/email.png"
import React from 'react'

export const Homepage = () => {
  return (
    <section className={styles.body}>
        <p className={styles.slogan}>Enjoy your clean space</p>
        

        <div className={styles.container}>
            <Form/>
        </div>
        
        <p>Otros metodos</p>

        <div className={styles.links}>

          <div className={styles.phone}>
          <img src={telephone} alt="Phone icon" width={"20px"} height={"20px"}/>
            
            <p>

            908-251-3398
            </p>
            </div>
          <br></br>
        
          <div className={styles.gmail}>
          <img src={email} alt="Phone icon" width={"20px"} height={"20px"}/>
            
            <p>
              EliCleans@gmail.com
              </p>
            </div>
        
        </div>
    </section>
  )
}
