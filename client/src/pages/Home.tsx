import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandsSection from '@/components/BrandsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

/**
 * Home Page - OUR Technologies
 * Design: Neo-Minimalist Tech Elegance
 * - Premium layout with all sections
 * - Smooth scrolling navigation
 * - Responsive design
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <BrandsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
