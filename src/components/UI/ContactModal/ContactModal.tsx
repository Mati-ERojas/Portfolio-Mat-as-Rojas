import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./ContactModal.module.css";

interface IContactModalProps {
    setOpenContactModal: Dispatch<SetStateAction<boolean>>;
}

export const ContactModal = ({ setOpenContactModal }: IContactModalProps) => {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenContactModal(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [setOpenContactModal]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";

        return () => {
            const storedScrollY = document.body.style.top;

            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";

            window.scrollTo(0, parseInt(storedScrollY || "0") * -1);
        };
    }, []);

    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setOpenContactModal(false);
        }, 300);
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.backgroundBlur} ${isClosing ? "fadeOut" : "fadeIn"}`}
                onClick={() => handleClose()}
            />
            <div
                className={`${styles.modalContainer} ${isClosing ? "exitSlideDown" : "slideUp"}`}
            >
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
        </div>
    );
};
