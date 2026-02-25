import { navigateTo } from "../../../routes/navigation";
import styles from "./EcolimpioPage.module.css";
import { AboutProyect } from "../../UI/Ecolimpio/AboutProyect/AboutProyect";
import { ProyectHero } from "../../UI/Ecolimpio/ProyectHero/ProyectHero";
import { ProyectArchitecture } from "../../UI/Ecolimpio/ProyectArchitecture/ProyectArchitecture";

export const EcolimpioPage = () => {
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
        </div>
    );
};
