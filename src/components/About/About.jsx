import styles from "./About.module.css";
import { useEffect, useRef } from "react";
import {getImageUrl} from "../../utils";

export const About = () => {

    useEffect(() => {
        const handleLoad = () => {
            if (titleRef.current) {
                titleRef.current.style.animation = `
                    typing 3s steps(22, end) forwards, 
                    blink 1s step-end 3s 3, 
                    disappear 0s forwards 6s
                `;
            }
        };

        // Wait until the whole page is loaded before applying animation
        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <section className={styles.aboutSection}>
            <img className={styles.image} src={getImageUrl('About/Me_and_Ollie.jpg')} alt='Braeden_Picture'/>
            <div className={styles.about}>
                <h1 className={styles.aboutTitle}>Hey! I'm Braeden</h1>
                <hr className={styles.aboutLine}/>
                <p className={styles.aboutDescription}>Born and raised in Colorado, I'm now a first year computer science student at the <strong>University of Massachusetts—Amherst</strong>. I love programming and enjoy using it as a creative medium for my other interests. When I'm not programming, you'll probably catch me cooking, playing poker, juggling a soccer ball, or exploring the outdoors!</p>
                <ul className={styles.iconBar}>
                    <li className={styles.icons}>
                        <a href="https://github.com/BraedenTurner22" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("About/GitHub.png")} alt="GitHub_Logo" />
                        </a>
                    </li>
                    <li className={styles.icons}>
                        <a href="https://www.linkedin.com/in/braedenturner/" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("About/LinkedIn.png")} alt="LinkedIn_Logo" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        
    );
};