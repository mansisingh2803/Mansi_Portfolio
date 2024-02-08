import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')} alt='my image' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='cursor' />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>
                                I'm a frontend developer with experience in building responsive and optimised sites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt='server' />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>
                                I have experience developing fast and optimised back - end sytem and API's.                    </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='DSA' />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Exploring DSA
                            </h3>
                            <p>
                                Efficient problem-solving through mastery of Data Structures and Algorithms.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}
