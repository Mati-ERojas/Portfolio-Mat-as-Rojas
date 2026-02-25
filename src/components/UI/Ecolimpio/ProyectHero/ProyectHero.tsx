import styles from "./ProyectHero.module.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const ProyectHero = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.textContainer}>
                <div className={styles.heroHeader}>
                    <motion.h4
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        Proyecto Fullstack
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Ecolimpio
                    </motion.h2>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Sistema de ventas online con gestión de inventario y pedidos
                    vía WhatsApp.
                </motion.p>
                <motion.div
                    className={styles.techStack}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span>
                        <FaReact
                            className={`${styles.icon} ${styles.reactIcon}`}
                        />
                        <p>React</p>
                    </span>
                    <span>
                        <SiSpringboot
                            className={`${styles.icon} ${styles.springbootIcon}`}
                        />
                        <p>Spring Boot</p>
                    </span>
                    <span>
                        <SiMysql
                            className={`${styles.icon} ${styles.mysqlIcon}`}
                        />
                        <p>MySQL</p>
                    </span>
                </motion.div>
                <motion.div
                    className={styles.githubLinks}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <FaGithub className={styles.githubIcon} />
                    <a
                        href="https://github.com/Mati-ERojas/Practicas-Profesionales_EcoLimpio_FrontEnd"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <button className={styles.githubButton}>
                            Frontend Code
                        </button>
                    </a>
                    <a
                        href="https://github.com/Mati-ERojas/Practicas-Profesionales_EcoLimpio_Backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <button className={styles.githubButton}>
                            Backend API
                        </button>
                    </a>
                </motion.div>
            </div>
            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
            >
                <img
                    src="/ecolimpio/ecolimpio_preview.webp"
                    alt="Ecolimpio"
                    className={styles.projectImage}
                />
            </motion.div>
        </div>
    );
};
