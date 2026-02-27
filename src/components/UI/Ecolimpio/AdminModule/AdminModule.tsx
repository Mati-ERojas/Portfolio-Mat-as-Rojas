import styles from "./AdminModule.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const AdminModule = () => {
    const adminModuleScreenshots = [
        {
            src: "/ecolimpio/ecolimpio_admin_menu.webp",
            alt: "Admin Module Screenshot 1",
        },
        {
            src: "/ecolimpio/ecolimpio_product-management.webp",
            alt: "Admin Module Screenshot 2",
        },
        {
            src: "/ecolimpio/ecolimpio_categories_modal.webp",
            alt: "Admin Module Screenshot 3",
        },
        {
            src: "/ecolimpio/ecolimpio_create-product.webp",
            alt: "Admin Module Screenshot 4",
        },
        {
            src: "/ecolimpio/ecolimpio_pos.webp",
            alt: "Admin Module Screenshot 5",
        },
        {
            src: "/ecolimpio/ecolimpio_cash-closing.webp",
            alt: "Admin Module Screenshot 6",
        },
        {
            src: "/ecolimpio/ecolimpio_cash-closing-history.webp",
            alt: "Admin Module Screenshot 7",
        },
        {
            src: "/ecolimpio/ecolimpio_movements-history.webp",
            alt: "Admin Module Screenshot 8",
        },
        {
            src: "/ecolimpio/ecolimpio_user-management.webp",
            alt: "Admin Module Screenshot 9",
        },
    ];
    const adminFunctionalities = [
        {
            text: "Gestión completa de productos (CRUD)",
        },
        {
            text: "Gestión de categorías",
        },
        {
            text: "Control de inventario y stock",
        },
        {
            text: "Definición y administración de ofertas",
        },
        {
            text: "Módulo de punto de venta (POS) para ventas presenciales y registro de ventas virutales",
        },
        {
            text: "Módulo de cierre de caja con historial de cierres",
        },
        {
            text: "Historial de movimientos y ventas",
        },
        {
            text: "Gestión de usuarios y roles administrativos",
        },
    ];
    return (
        <div className={styles.adminModuleSection}>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Módulo Administrativo (Backoffice)
            </motion.h3>
            <div className={styles.adminModuleContent}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className={`${styles.adminModuleCarouselContainer} defaultCard`}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={800}
                        loop
                        slidesPerView={1}
                        className={styles.swiperContainer}
                    >
                        {adminModuleScreenshots.map((screenshot, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    className={styles.adminModuleScreenshot}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <div className={styles.adminModuleFunctionalites}>
                    <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Funcionalidades Principales:
                    </motion.h4>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={styles.functionalitiesGrid}
                    >
                        {adminFunctionalities.map((func, index) => (
                            <p key={index} className="defaultCard">
                                {func.text}
                            </p>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
