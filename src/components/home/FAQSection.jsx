import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQSection.module.css';

const faqs = [
    {
        question: "What services does Brand Tech offer?",
        answer: "We offer a full suite of digital services including SEO, PPC, Social Media Management, Web Development, and Branding & Design."
    },
    {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. Typically, you can expect to see significant improvements in your rankings and organic traffic within 3 to 6 months."
    },
    {
        question: "Do you provide custom digital marketing packages?",
        answer: "Yes, we believe every business is unique. We tailor our digital marketing packages to meet your specific goals and budget."
    },
    {
        question: "How can I get started with Brand Tech?",
        answer: "Getting started is easy! Simply fill out our contact form or give us a call at +91 79 7359 6995 for a free consultation."
    },
    {
        question: "What makes Brand Tech different from other agencies?",
        answer: "We combine AI-powered tools with deep industry expertise and a focus on measurable ROI to ensure your brand stands out and grows."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faq}>
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <span className={styles.tagline}>Common Questions</span>
                    <h2 className={styles.title}>Frequently Asked <span>Questions</span></h2>
                </div>

                <div className={`${styles.accordion} reveal`}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        >
                            <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                                <h4>{faq.question}</h4>
                                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
