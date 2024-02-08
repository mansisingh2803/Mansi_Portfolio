import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
export const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt='Email' />
                    <a href='mailto:mansisinghsengar28@gmail.com'>Email.com/Mansi_Singh</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt='Linkedin' />
                    <a href='https://www.linkedin.com/in/mansi-singh-0153351aa/'>Linkedin.com/Mansi_Singh</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt='Github' />
                    <a href='https://github.com/mansisingh2803'>Github.com/Mansi_Singh</a>
                </li>
            </ul>
        </footer>
    )
}
