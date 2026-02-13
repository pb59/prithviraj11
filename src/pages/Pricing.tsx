import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PricingSection } from '@/components/PricingSection';
import { ConsultationSection } from '@/components/ConsultationSection';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Pricing Hero */}
        <section className="pt-32 pb-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Pricing</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Invest in Your <span className="text-gradient">AI Future</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Flexible plans for every stage of your GenAI journey.
              </p>
            </motion.div>
          </div>
        </section>

        <PricingSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
