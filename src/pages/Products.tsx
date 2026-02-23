import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GPTsSection } from '@/components/GPTsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { LearningSection } from '@/components/LearningSection';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Products Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Products</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                AI-Powered <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Purpose-built AI tools and open-source contributions solving real-world problems.
              </p>
            </motion.div>
          </div>
        </section>

        <GPTsSection />
        <ProjectsSection />
        <LearningSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
