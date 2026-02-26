import styles from "./ClientModule.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const ClientModule = () => {
    return (
        <div className={styles.clientModuleSection}>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Módulo Cliente (Interfaz Pública)
            </motion.h3>
            <div className={styles.clientModuleContent}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className={`${styles.clientModuleCarouselContainer} defaultCard`}
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
                        <SwiperSlide>
                            <img
                                src="/ecolimpio/ecolimpio_landing.webp"
                                alt="Client Module Screenshot 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/ecolimpio/ecolimpio_modal_item.webp"
                                alt="Client Module Screenshot 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/ecolimpio/ecolimpio_cart.webp"
                                alt="Client Module Screenshot 3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/ecolimpio/ecolimpio_browse.webp"
                                alt="Client Module Screenshot 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/ecolimpio/ecolimpio_browse_categories.webp"
                                alt="Client Module Screenshot 5"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/ecolimpio/ecolimpio_item_page.webp"
                                alt="Client Module Screenshot 6"
                            />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
                <div className={styles.clientModuleFunctionalites}>
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
                        <p className="defaultCard">
                            Visualización de productos
                        </p>
                        <p className="defaultCard">
                            Filtro automático por stock disponible
                        </p>
                        <p className="defaultCard">Búsqueda de productos</p>
                        <p className="defaultCard">Categorías de productos</p>
                        <p className="defaultCard">Carrito de compras</p>
                        <p className="defaultCard">
                            Control de cantidades (no permite superar el stock
                            real)
                        </p>
                        <p className="defaultCard">
                            Cálculo automático de totales (subtotal, total)
                        </p>
                        <p className="defaultCard">
                            Generación automática de mensaje estructurado para
                            envió vía WhatsApp
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
