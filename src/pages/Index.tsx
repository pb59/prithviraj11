import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { LearningSection } from '@/components/LearningSection';
import { GPTsSection } from '@/components/GPTsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ConsultationSection } from '@/components/ConsultationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LearningSection />
      <GPTsSection />
      <ExperienceSection />
      <ConsultationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
