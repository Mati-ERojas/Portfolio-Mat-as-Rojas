import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={`${styles.footer} fadeIn`}>
            <p>© 2026 Matías Emanuel Rojas. Desarrollado con React + Vite</p>
        </div>
    );
};
