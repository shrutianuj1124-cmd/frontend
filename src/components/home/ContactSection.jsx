import { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post('http://localhost:5000/api/inquiries', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            alert('Error sending message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.info} revealLeft`}>
                        <span className={styles.tagline}>Get In Touch</span>
                        <h2 className={styles.title}>Ready to <span>Grow</span> Your Business?</h2>
                        <p className={styles.description}>
                            Contact us today for a free consultation and let's discuss how we can help your brand dominate the digital space.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <div className={styles.detailIcon}><MapPin size={24} /></div>
                                <div className={styles.detailText}>
                                    <h4>Our Location</h4>
                                    <p>Panchkula, Haryana, India</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.detailIcon}><Phone size={24} /></div>
                                <div className={styles.detailText}>
                                    <h4>Call Us</h4>
                                    <p>+91 79 7359 6995</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.detailIcon}><Mail size={24} /></div>
                                <div className={styles.detailText}>
                                    <h4>Email Us</h4>
                                    <p>info@brandtech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formWrapper} revealRight`}>
                        {success && (
                            <div className={styles.successMessage}>
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">How can we help?</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>Sending... <Loader2 size={18} className={styles.spin} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
