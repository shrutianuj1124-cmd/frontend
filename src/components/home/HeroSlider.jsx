import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import styles from './HeroSlider.module.css';

const slides = [
    {
        id: 1,
        headline: "Scale Your Business With Smart Digital Marketing",
        subheadline: "Data-driven strategies that increase traffic, leads, and revenue.",
        cta1: "Get Free Strategy Call",
        cta2: "Call Now (+91 79 7359 6995)",
        image: "https://img.freepik.com/free-photo/creative-monitor-tech-digitally-generated-desk_1134-719.jpg?t=st=1771770779~exp=1771774379~hmac=3dabf8cc3fb7b35b0378f808a6de152429c840e6a7ff0f0af2e7568e4020ec07&w=1480"
    },
    {
        id: 2,
        headline: "We Build Brands That Dominate Online",
        subheadline: "Creative design + performance marketing for serious growth.",
        cta1: "View Our Work",
        cta2: null,
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        headline: "Your Growth Partner in the Digital Era",
        subheadline: "Custom SEO, Ads & Website Development Solutions.",
        cta1: "Start Your Project",
        cta2: null,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className={styles.hero}>
            <div className={styles.slider}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === current ? styles.active : ''}`}
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})` }}
                    >
                        <div className="container">
                            <div className={styles.content}>
                                <h1 className={styles.headline}>{slide.headline}</h1>
                                <p className={styles.subheadline}>{slide.subheadline}</p>
                                <div className={styles.actions}>
                                    <a href="/contact" className="btn-primary">
                                        {slide.cta1} <ArrowRight size={18} />
                                    </a>
                                    {slide.cta2 && (
                                        <a href="tel:+917973596995" className="btn-outline">
                                            <Phone size={18} /> {slide.cta2}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
                <ChevronLeft size={32} />
            </button>
            <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
                <ChevronRight size={32} />
            </button>

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>

            <div className={styles.overlay}></div>
        </section>
    );
};

export default HeroSlider;
