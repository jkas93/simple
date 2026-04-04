import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${menuOpen ? styles.navOpenState : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <img 
              src="/assets/images/logo-simple.webp" 
              alt="Simple Marketing" 
              fetchpriority="high" 
            />
          </Link>
          
          <div className={styles.desktopNavWrapper}>
            <ul className={styles.navLinks}>
              <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''} end onClick={closeMenu}>INICIO</NavLink></li>
              <li><NavLink to="/servicios" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>SERVICIOS</NavLink></li>
              <li><NavLink to="/odontologia" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>PORTAFOLIO</NavLink></li>
            </ul>
          </div>

          <div className={styles.rightActions}>
            <Link to="/contacto" className={styles.contactBtn}>Contactarnos</Link>
          </div>
        </div>
      </nav>

      <div className={`${styles.navLinksWrapper} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navLinksMobile}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''} end onClick={closeMenu}>INICIO</NavLink></li>
          <li><NavLink to="/servicios" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>SERVICIOS</NavLink></li>
          <li><NavLink to="/odontologia" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>PORTAFOLIO</NavLink></li>
        </ul>
      </div>

      <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Navbar;
