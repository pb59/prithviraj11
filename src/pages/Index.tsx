import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { LearningSection } from '@/components/LearningSection';
import { GPTsSection } from '@/components/GPTsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LeadMagnetSection } from '@/components/LeadMagnetSection';
import { ConsultationSection } from '@/components/ConsultationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <main className="min-h-screen bg-background">
            <section id="home"><HeroSection /></section>
            <section id="about"><AboutSection /></section>
            <section id="skills"><SkillsSection /></section>
            <section id="projects"><ProjectsSection /></section>
            <section id="learning"><LearningSection /></section>
            <section id="gpts"><GPTsSection /></section>
            <section id="experience"><ExperienceSection /></section>
            <section id="testimonials"><TestimonialsSection /></section>
            <section id="pricing"><PricingSection /></section>
            <section id="lead-magnet"><LeadMagnetSection /></section>
            <section id="consultation"><ConsultationSection /></section>
            <section id="contact"><ContactSection /></section>
            <Footer />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
