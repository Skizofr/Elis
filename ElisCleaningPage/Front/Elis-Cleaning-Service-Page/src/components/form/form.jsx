import styles from "./form.module.css"
import React from 'react'

export const Form = () =>{
  return (
    <>
    <div className={styles.container}>
        {/* <p className={styles.title}>Contact</p> */}

        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.subTitle} htmlFor="email">Email</label>
                <input placeholder="Enter Email" className={styles.formStyle} type="text"/>
            </div>
<br></br>
            <div className={styles.formGroup}>
                <label className={styles.subTitle} htmlFor="phone">Contact number</label>
                <input placeholder="(Optional)" className={styles.formStyle} type="Number"/>
            </div>
<br></br>
            <div className={styles.formGroup}>

                <label className={styles.subTitle} htmlFor="description">Tell us about the service</label>
                
                <input placeholder="Description" className={styles.descriptionStyle} type="text"/>
            
            </div>
<br></br>
            <div className={styles.dateGroup}>
                <label className={styles.dateTitle} htmlFor="date">Select date</label>
                <input placeholder="" className={styles.dateStyle} type="date"/>
            </div>
            
        </form>
            <button type="submit" className={styles.send}> Send</button>
    </div> 
    </>
  )
}
