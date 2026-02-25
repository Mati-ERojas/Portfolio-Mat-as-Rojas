import styles from "./ProyectCard.module.css";
import { motion } from "framer-motion";

interface ProyectCardProps {
    title: string;
    techStack: string;
    description: string;
    imageUrl: string;
    onClick?: () => void;
}

export const ProyectCard = (props: ProyectCardProps) => {
    return (
        <motion.div
            className={`${styles.proyectCard} defaultCard`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className={styles.proyectCardImage}>
                <img src={props.imageUrl} alt={`Imagen de ${props.title}`} />
            </div>
            <div className={styles.proyectCardContent}>
                <h4 className={styles.title}>{props.title}</h4>
                <p className={styles.techStack}>{props.techStack}</p>
                <p className={styles.description}>{props.description}</p>
                <motion.button
                    className={styles.viewProjectButton}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={props.onClick}
                >
                    Ver proyecto
                </motion.button>
            </div>
        </motion.div>
    );
};
