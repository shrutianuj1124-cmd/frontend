import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../assets/sdadsadas-300x76.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.topBar}>
                <div className="container">
                    <div className={styles.topBarContent}>
                        <a href="tel:+917973596995" className={styles.topInfo}>
                            <Phone size={14} />
                            <span>+91 79 7359 6995</span>
                        </a>
                        <p className={styles.topText}>Leading Digital Marketing & Branding Agency</p>
                    </div>
                </div>
            </div>

            <nav className={styles.navbar}>
                <div className={`container ${styles.navContainer}`}>
                    <Link to="/" className={styles.logo} onClick={closeMenu}>
                        <img src={logo} alt="Brand Tech Logo" className={styles.logoImg} />
                    </Link>

                    <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>About Us</NavLink>
                        <NavLink to="/services" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>Services</NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>Portfolio</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>Blog</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>Contact Us</NavLink>
                        <Link to="/contact" className={styles.ctaMobile} onClick={closeMenu}>Get A Quote</Link>
                    </div>

                    <div className={styles.navActions}>
                        <Link to="/contact" className={styles.ctaButton}>Get A Quote</Link>
                        <button className={styles.hamburger} onClick={toggleMenu}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
