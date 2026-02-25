import { Shield, TrendingUp, Users, Target } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
    {
        icon: <Shield size={32} />,
        title: "Full Transparency",
        description: "We provide detailed reports and maintaining clear communication in every project."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Proven ROI",
        description: "Our strategies are focused on delivering maximum return on your marketing investment."
    },
    {
        icon: <Users size={32} />,
        title: "Expert Team",
        description: "Work with certified professionals who are passionate about your business growth."
    },
    {
        icon: <Target size={32} />,
        title: "Custom Solutions",
        description: "We don't believe in one-size-fits-all. We build strategies tailored to your goals."
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.whyUs}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={`${styles.content} revealLeft`}>
                        <span className={styles.tagline}>Why Work With Us</span>
                        <h2 className={styles.title}>Results-Driven <span>Marketing</span> Strategy</h2>
                        <p className={styles.description}>
                            At Brand Tech, we combine AI-powered tools with human creativity to deliver growth that matters. We are not just a service provider; we are your growth partners.
                        </p>

                        <div className={styles.featureGrid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureBox}>
                                    <div className={styles.featureIcon}>{feature.icon}</div>
                                    <div className={styles.featureText}>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.imageWrapper} revealRight`}>
                        <div className={styles.mainImage}>
                            <div className={styles.statsCard}>
                                <h3>98%</h3>
                                <p>Client Retention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
