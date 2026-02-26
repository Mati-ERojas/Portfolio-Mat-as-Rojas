import { navigateTo } from "../../../routes/navigation";
import { ProyectCard } from "../ProyectCard/ProyectCard";
import styles from "./ProyectsSection.module.css";
import { motion } from "framer-motion";

export const ProyectsSection = () => {
    return (
        <div className={styles.proyectsSection}>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Proyectos
            </motion.h3>
            <div className={styles.proyectsContainer}>
                <ProyectCard
                    title={"Proyecto - EcoLimpio"}
                    techStack={"React · Spring Boot · MySQL"}
                    description={
                        "Sistema E-commerce para supermercado familiar con checkout externalizado, autenticación JWT, panel de administración y carrito de compras."
                    }
                    imageUrl={"ecolimpio/ecolimpio_preview.webp"}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant",
                        });
                        navigateTo("/ecolimpio");
                    }}
                />
            </div>
        </div>
    );
};
