import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, GraduationCap, TrendingUp, Database, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: GraduationCap,
    name: 'Super Child GPT',
    tagline: 'AI-powered educational assistant',
    description: 'Interactive learning for children. Makes education fun and engaging with AI.',
    color: 'from-emerald-500 to-teal-500',
    link: 'https://chatgpt.com/g/g-6979eb276e608191ab1b62df7bd19a71-super-child',
  },
  {
    icon: TrendingUp,
    name: 'NiftyNavigator AI',
    tagline: 'Stock market intelligence',
    description: 'Data-driven Nifty insights. Trends, analysis, and equity market perspectives.',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://chatgpt.com/g/g-fOheKB07Q-niftynavigator-ai',
  },
  {
    icon: Database,
    name: 'Talk2SQL',
    tagline: 'Natural language analytics',
    description: 'Query databases with plain English. Reduced query turnaround by ~40%.',
    color: 'from-primary to-accent',
    link: 'https://huggingface.co/spaces/prithvi55/talk2data',
  },
  {
    icon: Brain,
    name: 'LLM Fine-Tuning',
    tagline: 'Domain-specific AI models',
    description: 'Enterprise-grade fine-tuned models for support, analytics, and SQL generation.',
    color: 'from-purple-500 to-pink-500',
    link: 'https://huggingface.co/prithvi55',
  },
];

export const ProductShowcase = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Products</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              AI Tools I've <span className="text-gradient">Built</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <product.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-xs text-primary/70 font-medium mb-2">{product.tagline}</p>
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
