import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import {getImageUrl} from "../../utils";

export const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const projectRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            console.log("Is visible:", entry.isInteresecting);
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.2 }
        );
    
        if (projectRef.current) {
          observer.observe(projectRef.current);
        }
    
        return () => {
          if (projectRef.current) {
            observer.unobserve(projectRef.current);
          }
        };
    }, []);

    return (
        <section className={styles.projectSection} ref={projectRef}>
            <h1 className={styles.projectHead} id="projects">Projects</h1>
            <hr className={styles.projectHeadLine}/>
            <ul className={styles.projectList}>
                <li className={`${styles.project} ${isVisible ? styles.animate : ""}`}>
                    <img className={styles.projectImage} src={getImageUrl('Projects/Trap_The_Cat.png')} alt='Trap_The_Cat'/>
                    <div className={styles.projectDescription}>
                        <div className={styles.projectTitle}>
                            <a href="https://github.com/BraedenTurner22/Trap_the_Cat_RL" target="_blank" rel="noopener noreferrer">
                                <img src={getImageUrl("About/GitHub.png")} alt="GitHub_Logo" />
                                <h1>Trap the Cat RL Model, 2025</h1>
                            </a>
                        </div>
                        <hr className={styles.projectLine}/>
                        <p className={styles.projectWords}>My current project that I've just begun. I am working on creating a reinforcement learning model to perfectly play one of my favorite childhood games, Trap the Cat.</p>
                    </div>
                </li>
                <li className={`${styles.project} ${isVisible ? styles.animate : ""}`}>
                    <img className={styles.projectImage} src={getImageUrl('Projects/Personal_Portfolio.png')} alt='Personal_Portfolio'/>
                    <div className={styles.projectDescription}>
                        <div className={styles.projectTitle}>
                            <a href="https://github.com/BraedenTurner22/Personal_Portfolio" target="_blank" rel="noopener noreferrer">
                                <img src={getImageUrl("About/GitHub.png")} alt="GitHub_Logo" />
                                <h1>My Personal Portfolio, 2025</h1>
                            </a>
                        </div>
                        <hr className={styles.projectLine}/>
                        <p className={styles.projectWords}>My first project using the React framework, which helped me familiarize myself with React's functionalities and showcase my other projects. I also utilized in-memory caching with the Youtube Data API to ensure quota throttling for my cooking videos.</p>
                    </div>
                </li>
                <li className={`${styles.project} ${isVisible ? styles.animate : ""}`}>
                    <img className={styles.projectImage} src={getImageUrl('Projects/Blackjack_CC.png')} alt='Blackjack_CC'/>
                    <div className={styles.projectDescription}>
                        <div className={styles.projectTitle}>
                            <a href="https://github.com/BraedenTurner22/Blackjack_CardCounter" target="_blank" rel="noopener noreferrer">
                                <img src={getImageUrl("About/GitHub.png")} alt="GitHub_Logo" />
                                <h1>Blackjack Card Counter, 2024</h1>
                            </a>
                        </div>
                        <hr className={styles.projectLine}/>
                        <p className={styles.projectWords}>A YOLOv8 computer vision model trained to detect playing cards. These cards are associated with a count (+1/0/-1), and the player is informed when they have a statistical advantage over the house (+3 count) and should increase bet size.</p>
                    </div>
                </li>
                <li className={`${styles.project} ${isVisible ? styles.animate : ""}`}>
                    <img className={styles.projectImage} src={getImageUrl('Projects/UHelp.png')} alt='UHelp'/>
                    <div className={styles.projectDescription}>
                        <div className={styles.projectTitle}>
                            <a href="https://github.com/BraedenTurner22/UHelp" target="_blank" rel="noopener noreferrer">
                                <img src={getImageUrl("About/GitHub.png")} alt="GitHub_Logo" />
                                <h1>UHelp (HackUMass XII), 2024</h1>
                            </a>
                        </div>
                        <hr className={styles.projectLine}/>
                        <p className={styles.projectWords}>A fine-tuned LLM that provides specified mental health resources at UMass based on user queries. I focused on the web design and image-to-text functionality from user image input.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}