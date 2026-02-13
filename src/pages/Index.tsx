import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LeadMagnetSection } from '@/components/LeadMagnetSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProductShowcase />
        <HowItWorksSection />
        <section id="about"><AboutSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="lead-magnet"><LeadMagnetSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
