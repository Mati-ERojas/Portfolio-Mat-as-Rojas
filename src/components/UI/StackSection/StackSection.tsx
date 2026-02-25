import styles from "./StackSection.module.css";
import { motion } from "framer-motion";

export const StackSection = () => {
    return (
        <div className={styles.stackSection}>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Stack Tecnológico
            </motion.h3>
            <div className={styles.stacksContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -12,
                        scale: 1.03,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`${styles.stackItem} defaultCard`}
                >
                    <h4>Frontend</h4>
                    <p>· HTML5</p>
                    <p>· CSS3</p>
                    <p>· JS y TS</p>
                    <p>· React</p>
                    <p></p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -12,
                        scale: 1.03,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`${styles.stackItem} defaultCard`}
                >
                    <h4>Backend / ORMs</h4>
                    <p>· NodeJS</p>
                    <p>· Spring Boot</p>
                    <p>· Express</p>
                    <p>· Hibernate / JPA</p>
                    <p>· Prisma</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -12,
                        scale: 1.03,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`${styles.stackItem} defaultCard`}
                >
                    <h4>Base de Datos</h4>
                    <p>· MySQL</p>
                    <p>· MongoDB</p>
                    <p>· PostgreSQL</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -12,
                        scale: 1.03,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`${styles.stackItem} defaultCard`}
                >
                    <h4>Herramientas</h4>
                    <p>· Git / Github</p>
                    <p>· Figma</p>
                    <p>· Postman</p>
                </motion.div>
            </div>
        </div>
    );
};
