import styles from "./AboutSkillsSection.module.css";
import { motion } from "framer-motion";

export const AboutSkillsSection = () => {
    return (
        <div className={styles.aboutSkillsContainer}>
            <div className={styles.aboutMeSection}>
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    Sobre mí
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                        y: -5,
                        scale: 1.01,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                >
                    Desarrollador Fullstack enfocado en aplicaciones web
                    modernas. Trabajo con React, Spring Boot y bases de datos
                    SQL/NoSQL. Me especializo en código limpio, estructurado y
                    escalable. Disfruto diseñar interfaces claras y APIs bien
                    organizadas.
                </motion.p>
            </div>
            <div className={styles.skillsSection}>
                <motion.h3
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    Habilidades técnicas
                </motion.h3>
                <motion.ul
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                        y: -5,
                        scale: 1.01,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                >
                    <li>Arquitectura modular</li>
                    <li>Arquitectura MVC</li>
                    <li>Diseño y consumo de APIs REST</li>
                    <li>Modelado de bases de datos relacionales y NoSQL</li>
                    <li>
                        Autenticación de usuarios con JWT y encriptación de
                        datos
                    </li>
                    <li>Validación y manejo de errores</li>
                    <li>Desarrollo de interfaces de usuario responsivas</li>
                    <li>Control de versiones con Git</li>
                    <li>Despliegue de aplicaciones web</li>
                </motion.ul>
            </div>
        </div>
    );
};
