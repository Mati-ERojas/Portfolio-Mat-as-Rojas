import { IconButton } from '../../UI/IconButton/IconButton'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.background}>
        <div className={styles.heroPage}>
          <div className={styles.profileContainer}>
            <div className={styles.profileTitle}>
              <h2>Portfolio - Matías Emanuel Rojas</h2>
            </div>
            <div className={styles.profileInfo}>
              <img src="profile_pic.jpeg" alt="Profile" className={styles.profileImage} />
              <div className={styles.textContainer}>
                <p><b>Desarrollador web FullStack</b></p>
                <p>React · Spring Boot · Node.js · MySQL · Entre otros</p>
                <p>Desarrollo aplicaciones web completas con arquitectura en capas, autenticación JWT y bases de datos relacionales y NoSQL.</p>
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <IconButton icon="folder" text='Ver Proyectos' fontSize='1rem' iconFontSize='2rem'/>
            <IconButton icon="mail" text='Contacto' fontSize='1rem' iconFontSize='2rem'/>
            <IconButton icon="download" text='Descargar CV' fontSize='1rem' iconFontSize='2rem'/>
          </div>
        </div>
    </div>
  )
}
