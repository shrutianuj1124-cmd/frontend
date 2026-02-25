import HeroSlider from '../components/home/HeroSlider';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioSection from '../components/home/PortfolioSection';
import LatestBlogs from '../components/home/LatestBlogs';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSlider />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUs />
            <PortfolioSection />
            <LatestBlogs />
            <FAQSection />
            <ContactSection />
        </div>
    );
};

export default Home;
