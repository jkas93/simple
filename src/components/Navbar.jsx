import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <img 
            src="/assets/images/logo-simple.webp" 
            alt="Simple Marketing" 
            fetchpriority="high" 
          />
        </Link>
        
        <ul className={styles.navLinks}>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/servicios">SERVICIOS</Link></li>
          <li><Link to="/odontologia">PORTAFOLIO</Link></li>
        </ul>

        <Link to="/contacto" className={styles.contactBtn}>Contactarnos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
