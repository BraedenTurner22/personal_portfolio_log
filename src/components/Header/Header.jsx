import React, {useState} from "react";
import styles from "./Header.module.css";
import {getImageUrl} from "../../utils";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.header}>
            <nav>
                <img className={styles.menuBtn} src={
                    menuOpen
                    ? getImageUrl("Header/Exit.png")
                    : getImageUrl("Header/Menu.png")
                } alt='menu-button' onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menu} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <button onClick={() => handleScroll("projects")}>
                            {menuOpen ? "•Projects" : "Projects"}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("cooking")}>
                            {menuOpen ? "•Cooking" : "Cooking"}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("contact")}>
                            {menuOpen ? "•Contact" : "Contact"}
                        </button>
                    </li>
                </ul>
            </nav>
            <a className={styles.name} href="/">Braeden Turner</a>
        </section>
    );
};