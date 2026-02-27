import { navigateTo } from "../../../routes/navigation";
import styles from "./EcolimpioPage.module.css";
import { AboutProyect } from "../../UI/Ecolimpio/AboutProyect/AboutProyect";
import { ProyectHero } from "../../UI/Ecolimpio/ProyectHero/ProyectHero";
import { ProyectArchitecture } from "../../UI/Ecolimpio/ProyectArchitecture/ProyectArchitecture";
import { ClientModule } from "../../UI/Ecolimpio/ClientModule/ClientModule";
import { Footer } from "../../UI/Footer/Footer";
import { AdminModule } from "../../UI/Ecolimpio/AdminModule/AdminModule";
import { IconButton } from "../../UI/IconButton/IconButton";
import { useState } from "react";
import { GenericModal } from "../../UI/GenericModal/GenericModal";
import { motion } from "framer-motion";

export const EcolimpioPage = () => {
    const [openMockup, setOpenMockup] = useState(false);

    return (
        <div className={styles.background}>
            <div
                className={`${styles.goBackContainer} slideDown`}
                style={{ animation: "slideDown .5s ease forwards" }}
                onClick={() => navigateTo("/home")}
            >
                <span className="material-symbols-outlined">home</span>
            </div>
            <ProyectHero />
            <AboutProyect />
            <ProyectArchitecture />
            <ClientModule />
            <AdminModule />
            <div className={styles.additionalSection}>
                <motion.h3
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={styles.additionalSectionTitle}
                >
                    Material adicional del proyecto
                </motion.h3>
                <div className={styles.additionalSectionButtonsContainer}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <IconButton
                            icon="open_in_new"
                            text="Mockup (Figma)"
                            fontSize="1.5rem"
                            iconFontSize="2rem"
                            onClick={() => {
                                setOpenMockup(true);
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <IconButton
                            icon="description"
                            text="Informe (PDF)"
                            fontSize="1.2rem"
                            iconFontSize="2rem"
                            onClick={() =>
                                window.open(
                                    "/ecolimpio/ecolimpio_report.pdf",
                                    "_blank",
                                )
                            }
                        />
                    </motion.div>
                </div>
            </div>
            <Footer />
            {openMockup && (
                <GenericModal
                    setOpenGenericModal={setOpenMockup}
                    content={
                        <div className={styles.mockupContainer}>
                            <iframe
                                style={{
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                }}
                                width="100%"
                                height="100%"
                                src="https://embed.figma.com/design/7JQtYgsXYk2odW2LDSFbq7/EcoLimpio?node-id=0-1&embed-host=share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    }
                />
            )}
        </div>
    );
};
