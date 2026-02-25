import { ExternalLink } from 'lucide-react';
import styles from './PortfolioSection.module.css';

const projects = [
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        category: "Web Development",
        title: "Eco-Tech Solutions",
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        category: "Digital Marketing",
        title: "Prime Grocery App",
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        category: "Branding",
        title: "Urban Fashion House",
    },
    {
        image: "https://images.unsplash.com/photo-1454165833762-b201c0029f8e?q=80&w=2070&auto=format&fit=crop",
        category: "SEO Strategy",
        title: "Global Logistics Hub",
    },
    {
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1931&auto=format&fit=crop",
        category: "Social Media",
        title: "Luxe Beauty Brand",
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        category: "E-commerce",
        title: "Quick-Cart Market",
    }
];

const PortfolioSection = () => {
    return (
        <section className={styles.portfolio}>
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <span className={styles.tagline}>Our Latest Projects</span>
                    <h2 className={styles.title}>Successful Case <span>Studies</span></h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.card} revealScale delay${(index % 3) + 1}`}
                        >
                            <img src={project.image} alt={project.title} />
                            <div className={styles.overlay}>
                                <span className={styles.category}>{project.category}</span>
                                <h3>{project.title}</h3>
                                <button className={styles.viewBtn}>
                                    View Project <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.footer} reveal`}>
                    <a href="/portfolio" className="btn btn-outline">View All Projects</a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
