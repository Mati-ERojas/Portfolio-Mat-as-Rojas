import { useState } from "react";
import styles from "./ProyectArchitecture.module.css";
import { motion } from "framer-motion";
import { GenericModal } from "../../GenericModal/GenericModal";

export const ProyectArchitecture = () => {
    const [openImageModal, setOpenImageModal] = useState(false);

    return (
        <div className={styles.architectureSection}>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Arquitectura del Proyecto
            </motion.h3>
            <div className={styles.architectureContent}>
                <motion.div
                    className={`${styles.architectureDescription} defaultCard`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Ecolimpio es un sistema web fullstack orientado a la
                        digitalización de un supermercado familiar, con un
                        enfoque en simplicidad operativa y eficiencia en la
                        gestión.
                    </p>
                    <p>El sistema está compuesto por:</p>
                    <ul>
                        <li>Frontend React + TypeScript</li>
                        <li>
                            Backend Spring Boot con arquitectura en capas y
                            autenticación JWT con manejo de roles (admin y
                            empleado)
                        </li>
                        <li>Base de datos relacional MySQL</li>
                        <li>
                            Integración con WhatsApp como canal de cierre de
                            ventas
                        </li>
                    </ul>
                </motion.div>
                <div className={styles.architectureVisualContent}>
                    <motion.div
                        className={`${styles.architectureVisualItem} defaultCard`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h4>Diagrama Entidad-Relación (DER)</h4>
                        <img
                            src="/ecolimpio/diagrama_de_relacion.jpg"
                            alt="Diagrama de relaciones"
                            className={styles.diagramImage}
                            style={{ borderRadius: 10 }}
                            onClick={() => setOpenImageModal(true)}
                        />
                        <p>
                            Modelo relacional normalizado para gestión de
                            ventas, stock y usuarios con control de roles.
                        </p>
                    </motion.div>
                    <motion.div
                        className={`${styles.architectureVisualItem} defaultCard`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h4>Arquitectura Cliente-Servidor</h4>
                        <img
                            src="/ecolimpio/arquitectura_cliente-servidor.svg"
                            alt="Arquitectura Cliente-Servidor"
                            className={styles.architectureImage}
                        />
                    </motion.div>
                </div>
            </div>
            {openImageModal && (
                <GenericModal
                    setOpenGenericModal={setOpenImageModal}
                    content={
                        <div className={styles.imageModalContent}>
                            <img
                                src="/ecolimpio/diagrama_de_relacion.jpg"
                                alt="Diagrama de relaciones"
                            />
                        </div>
                    }
                />
            )}
        </div>
    );
};
