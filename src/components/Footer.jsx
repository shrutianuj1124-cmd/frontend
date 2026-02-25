import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import styles from './Footer.module.css';
import logo from '../assets/sdadsadas-300x76.webp';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt="Brand Tech Logo" className={styles.logoImg} />
                        </Link>
                        <p className={styles.description}>
                            Leading Digital Marketing & Branding Agency in Panchkula. We provide strategic AI-powered digital solutions to help businesses grow in the modern digital era.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Our Services</h3>
                        <ul className={styles.links}>
                            <li><Link to="/services"><ChevronRight size={14} /> Social Media Marketing</Link></li>
                            <li><Link to="/services"><ChevronRight size={14} /> SEO Optimization</Link></li>
                            <li><Link to="/services"><ChevronRight size={14} /> Meta Ads (FB & IG)</Link></li>
                            <li><Link to="/services"><ChevronRight size={14} /> Website Development</Link></li>
                            <li><Link to="/services"><ChevronRight size={14} /> Graphic Designing</Link></li>
                            <li><Link to="/services"><ChevronRight size={14} /> Google Ads (PPC)</Link></li>
                        </ul>
                    </div>


                    <div className={styles.column}>
                        <h3>Contact Info</h3>
                        <ul className={styles.contactInfo}>
                            <li>
                                <MapPin className={styles.icon} size={20} />
                                <span>SCO 408, Sector 20 Panchkula, India</span>
                            </li>
                            <li>
                                <Phone className={styles.icon} size={20} />
                                <a href="tel:+917973596995">+91 79 7359 6995</a>
                            </li>
                            <li>
                                <Mail className={styles.icon} size={20} />
                                <a href="mailto:info@brand-tech.co.in">info@brand-tech.co.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {currentYear} Brand Tech. All Rights Reserved.</p>
                    <div className={styles.bottomLinks}>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
