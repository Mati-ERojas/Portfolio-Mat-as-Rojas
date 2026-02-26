import { useState } from "react";
import { IconButton } from "../../UI/IconButton/IconButton";
import styles from "./Home.module.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { StackSection } from "../../UI/StackSection/StackSection";
import { AboutSkillsSection } from "../../UI/AboutSkillsSection/AboutSkillsSection";
import { ProyectsSection } from "../../UI/ProyectsSection/ProyectsSection";
import { GenericModal } from "../../UI/GenericModal/GenericModal";
import { Footer } from "../../UI/Footer/Footer";

export const Home = () => {
    const [openContactModal, setOpenContactModal] = useState(false);

    const handleScrollToProyects = () => {
        const proyectsSection = document.getElementById("proyects");
        if (proyectsSection) {
            proyectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.heroSection} fadeUp`}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileTitle}>
                        <h2>Portfolio - Matías Emanuel Rojas</h2>
                    </div>
                    <div className={styles.profileInfo}>
                        <img
                            src="profile_pic.jpeg"
                            alt="Profile"
                            className={styles.profileImage}
                        />
                        <div className={styles.textContainer}>
                            <p>
                                <b>Desarrollador web FullStack</b>
                            </p>
                            <p>React · Spring Boot · Node.js · MySQL</p>
                            <p>
                                Desarrollo aplicaciones web completas con
                                arquitectura en capas, autenticación JWT y bases
                                de datos relacionales y NoSQL.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <IconButton
                        icon="folder"
                        text="Ver Proyectos"
                        fontSize="1rem"
                        iconFontSize="2rem"
                        onClick={() => handleScrollToProyects()}
                    />
                    <IconButton
                        icon="mail"
                        text="Contacto"
                        fontSize="1rem"
                        iconFontSize="2rem"
                        onClick={() => {
                            setOpenContactModal(true);
                        }}
                    />
                    <IconButton
                        icon="download"
                        text="Descargar CV"
                        fontSize="1rem"
                        iconFontSize="2rem"
                        href="/CV-Matias_Rojas.pdf"
                        dowload={true}
                    />
                </div>
            </div>
            <StackSection />
            <section id="proyects">
                <ProyectsSection />
            </section>
            <AboutSkillsSection />
            <Footer />
            {openContactModal && (
                <GenericModal
                    setOpenGenericModal={setOpenContactModal}
                    content={
                        <div className={styles.contactModalContent}>
                            <a
                                href="https://github.com/Mati-ERojas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialIcon} ${styles.github}`}
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mat%C3%ADas-rojas-021b09254/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialIcon} ${styles.linkedin}`}
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://wa.me/5492616452668"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialIcon} ${styles.whatsapp}`}
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="mailto:matiasemanuelrojas0112@gmail.com"
                                className={`${styles.socialIcon} ${styles.email}`}
                            >
                                <MdEmail />
                            </a>
                        </div>
                    }
                />
            )}
        </div>
    );
};
