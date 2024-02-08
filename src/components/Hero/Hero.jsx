import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Mansi Singh</h1>
                <p className={styles.description}> I'm a Full-Stack developer using the tecnology
                    NodeJs. Reach out if you'd like to learn more!.
                </p>
                <a href='mailto:mansisinghsengar28@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="animated image" className={styles.heroImg} />
            <div className={StyleSheet.topBlur}></div>
            <div className={StyleSheet.bottomBlur}></div>
        </section>);
}
