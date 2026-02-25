import PageHeader from '../components/PageHeader';
import PortfolioSection from '../components/home/PortfolioSection';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <PageHeader
                title="Our Portfolio"
                subtitle="Excellence delivered. Explore our latest works and success stories."
            />

            <div className="reveal">
                <PortfolioSection />
            </div>

            <section className={`${styles.cta} reveal`}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Have a Project in Mind?</h2>
                        <p>Let's collaborate and build something amazing together.</p>
                        <a href="/contact" className="btn btn-primary">Start a Conversation</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
