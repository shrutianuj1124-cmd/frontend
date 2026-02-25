import React from 'react';
import { Phone, ArrowRight, Play } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Layers */}
            <div className={styles.noiseOverlay}></div>
            <div className={styles.radialGlow}></div>

            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column: Content */}
                    <div className={styles.leftCol}>
                        <div className={styles.badge}>
                            <span>“AI-Powered Growth Agency”</span>
                        </div>

                        <h1 className={styles.headline}>
                            We Help Brands <span className={styles.tealText}>Scale</span> Faster
                        </h1>

                        <p className={styles.subheadline}>
                            Data-driven marketing strategies that increase traffic, leads and real revenue.
                        </p>

                        <div className={styles.actions}>
                            <button className={styles.primaryBtn}>
                                Get Free Strategy Call <ArrowRight size={18} />
                            </button>
                            <button className={styles.outlineBtn}>
                                View Portfolio
                            </button>
                        </div>

                        <div className={styles.contactInfo}>
                            <div className={styles.phoneIcon}>
                                <Phone size={16} />
                            </div>
                            <a href="tel:+917973596995">+91 79 7359 6995</a>
                        </div>
                    </div>

                    {/* Right Column: Premium Visual */}
                    <div className={styles.rightCol}>
                        <div className={styles.visualContainer}>
                            {/* Glassmorphic Dashboard Effect */}
                            <div className={styles.glassCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.dots}>
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className={styles.searchBar}></div>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.chartArea}>
                                        <div className={styles.bar} style={{ height: '40%' }}></div>
                                        <div className={styles.bar} style={{ height: '70%' }}></div>
                                        <div className={styles.bar} style={{ height: '50%' }}></div>
                                        <div className={styles.bar} style={{ height: '90%' }}></div>
                                        <div className={styles.bar} style={{ height: '60%' }}></div>
                                    </div>
                                    <div className={styles.statsRow}>
                                        <div className={styles.statLine}></div>
                                        <div className={styles.statLine}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element 2 */}
                            <div className={styles.floatingTag}>
                                <div className={styles.tagCircle}>
                                    <Play size={12} fill="var(--accent)" />
                                </div>
                                <div>
                                    <div className={styles.tagText}>Conversion Rate</div>
                                    <div className={styles.tagPrice}>+145%</div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className={styles.elementGlow}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
