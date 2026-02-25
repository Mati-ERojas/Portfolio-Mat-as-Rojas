import styles from "./AboutProyect.module.css";
import { motion } from "framer-motion";

export const AboutProyect = () => {
    return (
        <div className={styles.aboutProyectSection}>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Sobre el Proyecto
            </motion.h3>
            <div className={styles.aboutProyectContent}>
                <motion.div
                    className={`${styles.proyectObjective} defaultCard`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h4>Objetivo del proyecto 🎯</h4>
                    <p>
                        Desarrollar una plataforma web fullstack para
                        digitalizar y centralizar la operación de un
                        supermercado familiar.
                    </p>
                    <p>La solución permite: </p>
                    <ul>
                        <li>Realizar pedidos online de forma simple.</li>
                        <li>
                            Gestionar inventario y ventas desde un panel
                            administrativo.
                        </li>
                        <li>Mantener un flujo de compra ágil y accesible.</li>
                    </ul>
                    <p>
                        Se priorizó la usabilidad y la eficiencia operativa por
                        encima de la complejidad técnica innecesaria.
                    </p>
                </motion.div>
                <motion.div
                    className={`${styles.proyectProblem} defaultCard`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h4>Problema Detectado 🧩</h4>
                    <p>
                        El negocio necesitaba modernizar su operación sin
                        incorporar sistemas costosos o difíciles de implementar.
                    </p>
                    <p>Principales desafíos:</p>
                    <ul>
                        <li>
                            Sin depender de sistemas costosos o soluciones
                            complejas de difícil adopción.
                        </li>
                        <li>
                            El control de inventario no estaba centralizado.
                        </li>
                        <li>Se debía mantener la confirmación vía WhatsApp.</li>
                        <li>
                            Era fundamental evitar entorpecer la experiencia del
                            cliente.
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className={`${styles.proyectTargetAudience} defaultCard`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                >
                    <h4>Público objetivo 👥</h4>
                    <p>La plataforma está orientada a dos tipos de usuarios:</p>
                    <ul>
                        <li>
                            Clientes habituales del supermercado que desean
                            realizar pedidos de forma digital.
                        </li>
                        <li>
                            Personal del supermercado que necesita gestionar
                            inventario y ventas de manera eficiente.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};
