import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import styles from "./GenericModal.module.css";

interface IContactModalProps {
    setOpenGenericModal: Dispatch<SetStateAction<boolean>>;
    content: React.ReactNode;
}

export const GenericModal = ({
    setOpenGenericModal,
    content,
}: IContactModalProps) => {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [setOpenGenericModal]);

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
            setOpenGenericModal(false);
        }, 300);
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.backgroundBlur} ${isClosing ? "fadeOut" : "fadeIn"}`}
            />
            <div
                onClick={() => handleClose()}
                className={`${styles.modalContainer} ${isClosing ? "exitSlideDown" : "slideUp"}`}
            >
                {content}
            </div>
        </div>
    );
};
