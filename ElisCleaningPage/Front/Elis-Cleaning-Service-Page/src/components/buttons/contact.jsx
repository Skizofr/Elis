    import React from 'react'
    import styles from './contact.module.css'
    import { Link } from 'react-router-dom';
    export const Contact = () => {
        return (
        <>

        <Link to="/contact"  className={styles.contact}>
            <button className={styles.button}>Contact!</button>
        </Link>
        </>
    )
    };