import styles from './AboutSection.module.css';

const AboutSection = () => {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.imageCol} revealLeft`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Agency Team"
                            />
                            <div className={styles.experienceBadge}>
                                <h3>5+</h3>
                                <p>Years of <span>Success</span></p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.contentCol} revealRight`}>
                        <span className={styles.tagline}>About Brand Tech</span>
                        <h2 className={styles.title}>Your Partner in <span>Digital Excellence</span></h2>
                        <p className={styles.description}>
                            Brand Tech is a leading digital marketing and branding agency based in Panchkula, India. We specializes in helping businesses transform into powerful brands through AI-driven strategies and creative innovation.
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.highlightItem}>
                                <div className={styles.icon}>01</div>
                                <div className={styles.text}>
                                    <h4>Expert Team</h4>
                                    <p>Our professionals are experts in their respective digital domains.</p>
                                </div>
                            </div>
                            <div className={styles.highlightItem}>
                                <div className={styles.icon}>02</div>
                                <div className={styles.text}>
                                    <h4>Result Oriented</h4>
                                    <p>We focus on delivering measurable growth and maximum ROI.</p>
                                </div>
                            </div>
                        </div>

                        <a href="/about" className="btn-primary">Learn More About Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
