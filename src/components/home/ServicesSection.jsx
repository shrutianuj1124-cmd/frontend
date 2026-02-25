import { Megaphone, Globe, Palette, BarChart, MessageSquare, Target } from 'lucide-react';
import styles from './ServicesSection.module.css';

const services = [
    {
        icon: <Megaphone size={40} />,
        title: "Digital Marketing",
        description: "Strategic online marketing campaigns that boost your brand visibility and drive high-quality leads."
    },
    {
        icon: <Globe size={40} />,
        title: "Web Development",
        description: "Modern, responsive, and high-performance websites built with the latest technologies to convert visitors into customers."
    },
    {
        icon: <Palette size={40} />,
        title: "Branding & Design",
        description: "Creative branding solutions that give your business a unique identity and make you stand out in the market."
    },
    {
        icon: <BarChart size={40} />,
        title: "SEO Optimization",
        description: "Advanced search engine optimization strategies to improve your rankings and drive organic traffic."
    },
    {
        icon: <MessageSquare size={40} />,
        title: "Social Media Management",
        description: "Engaging social media strategies to build your community and strengthen your online presence."
    },
    {
        icon: <Target size={40} />,
        title: "PPC Advertising",
        description: "Result-oriented pay-per-click campaigns that maximize your reach and provide immediate business growth."
    }
];

const ServicesSection = () => {
    return (
        <section className={styles.services}>
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <span className={styles.tagline}>Our Expert Services</span>
                    <h2 className={styles.title}>Comprehensive <span>Solutions</span> for Your Brand</h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${styles.card} revealScale delay${(index % 3) + 1}`}
                        >
                            <div className={styles.icon}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="/services" className={styles.link}>Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
