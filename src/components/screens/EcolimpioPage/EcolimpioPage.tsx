import { navigateTo } from "../../../routes/navigation";
import styles from "./EcolimpioPage.module.css";
import { FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const EcolimpioPage = () => {
    return (
        <div className={styles.background}>
            <div
                className={`${styles.goBackContainer} slideDown`}
                style={{ animation: "slideDown .5s ease forwards" }}
                onClick={() => navigateTo("/home")}
            >
                <span className="material-symbols-outlined">home</span>
            </div>
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
                        Sistema de ventas online con gestión de inventario y
                        pedidos vía WhatsApp.
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
                        <button className={styles.githubButton}>
                            Frontend Code
                        </button>
                        <button className={styles.githubButton}>
                            Backend API
                        </button>
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
        </div>
    );
};
