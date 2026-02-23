import { motion } from 'framer-motion';
import { MessageSquare, Zap, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Explore AI Products',
    description: 'Browse our custom GPTs and AI tools built for real-world business problems — education, finance, analytics.',
  },
  {
    icon: Zap,
    step: '02',
    title: 'Book a Session',
    description: 'Choose from starter to enterprise consultation packages. Get personalized mentoring from an 18-year industry veteran.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Transform Your Business',
    description: 'Implement production-ready GenAI solutions, upskill your team, and drive measurable ROI.',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">How It Works</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
            Three Steps to <span className="text-gradient">AI Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">{step.step}</span>
              <h3 className="font-display text-xl font-bold mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
