import PageHeader from '../components/PageHeader';
import ContactSection from '../components/home/ContactSection';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <PageHeader
                title="Contact Us"
                subtitle="We are here to help you grow. Reach out to us for a free consultation."
            />

            <div className="reveal">
                <ContactSection />
            </div>

            <section className={`${styles.mapSection} reveal`}>
                <div className="container">
                    <div className={styles.mapTitle}>
                        <h2>Find Us</h2>
                        <p>Our office is located in the heart of Panchkula, Haryana.</p>
                    </div>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912957122!2d76.81307297924341!3d30.735062635930263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f948f2a243465%3A0x86e68058281313e9!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716381234567!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '15px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
