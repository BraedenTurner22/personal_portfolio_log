import React, { useState, useEffect } from "react";
import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";

export const Contact = () => {

    return (
        <section className={styles.contact}>
            <h1 className={styles.contactHead} id="contact">Contact</h1>
            <hr className={styles.contactHeadLine}/>
            <div className={styles.contactSection}>
                <h1 className={styles.contactStatement}>Feel free to reach out:</h1>
                <ul className={styles.contactList}>
                    <li className={styles.contactOption}>
                        <a href="mailto:braedenturner22@gmail.com">
                            <img src={getImageUrl("Contact/Email.png")} alt="Email_Logo" className={styles.contactIcon}/>
                            <h1 className={styles.contactLink}>braedenturner22@gmail.com</h1>
                        </a>
                    </li>
                    <li className={styles.contactOption}>
                        <a href="https://github.com/BraedenTurner22" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("About/GitHub.png")} alt="GitHub_Logo" className={styles.contactIcon}/>
                            <h1 className={styles.contactLink}>https://github.com/BraedenTurner22</h1>
                        </a>
                    </li>
                    <li className={styles.contactOption}>
                        <a href="https://www.linkedin.com/in/braedenturner/" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("About/LinkedIn.png")} alt="LinkedIn_Logo" className={styles.contactIcon}/>
                            <h1 className={styles.contactLink}>https://www.linkedin.com/in/braedenturner/</h1>
                        </a>
                    </li>
                </ul>
            </div>
            <h1 className={styles.contactFooter}>© 2025 Braeden Turner</h1>
        </section>
    );
}