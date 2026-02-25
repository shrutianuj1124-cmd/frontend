import PageHeader from '../components/PageHeader';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';

const About = () => {
    return (
        <div className="about-page">
            <PageHeader
                title="About Our Agency"
                subtitle="Transforming businesses into digital leaders through innovation and strategy."
            />
            <div className="reveal">
                <AboutSection />
            </div>
            <div className="reveal">
                <WhyChooseUs />
            </div>

            <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--bg-grey)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Mission</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                            Our mission is to empower businesses with innovative, AI-driven marketing solutions that deliver real-world results. We believe in transparency, creativity, and the power of data to transform brands and drive sustainable growth.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
