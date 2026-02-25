import PageHeader from '../components/PageHeader';
import ServicesSection from '../components/home/ServicesSection';
import ContactSection from '../components/home/ContactSection';
import styles from './Services.module.css';

const Services = () => {
    return (
        <div className="services-page">
            <PageHeader
                title="Our Services"
                subtitle="We provide comprehensive digital solutions to help your business grow."
            />

            <div className="reveal">
                <ServicesSection />
            </div>

            <section className={`${styles.howWeWork} reveal`}>
                <div className="container">
                    <div className={styles.header}>
                        <h2>How We Work</h2>
                        <p>Our streamlined process ensures the best results for your brand.</p>
                    </div>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>01</div>
                            <h4>Discovery</h4>
                            <p>We understand your business goals and target audience.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>02</div>
                            <h4>Strategy</h4>
                            <p>Creating a customized road map for your digital growth.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>03</div>
                            <h4>Execution</h4>
                            <p>Implementing the strategy with creative and technical excellence.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>04</div>
                            <h4>Growth</h4>
                            <p>Monitoring results and continuously optimizing for success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="reveal">
                <ContactSection />
            </div>
        </div>
    );
};

export default Services;
