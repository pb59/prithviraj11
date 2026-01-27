import { Brain, Cloud, Shield, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'Generative AI',
    color: 'primary',
    skills: [
      'LLM Fine-Tuning (Hugging Face)',
      'RAG Pipelines',
      'LangChain & LlamaIndex',
      'Multi-Agent Orchestration',
      'Prompt Engineering',
      'Transformer Architecture',
      'Vector Databases',
      'Quantum AI Research',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Data',
    color: 'accent',
    skills: [
      'Azure (Expert)',
      'AWS',
      'Google Cloud Platform',
      'Data Lakes & Warehouses',
      'ETL / Data Engineering',
      'SQL Server & Synapse',
      'Enterprise Data Platforms',
      'Cloud Migration',
    ],
  },
  {
    icon: Shield,
    title: 'Responsible AI',
    color: 'primary',
    skills: [
      'AI Governance & Compliance',
      'Bias & Risk Assessment',
      'Secure Enterprise AI Adoption',
      'MLOps Best Practices',
      'Model Monitoring',
      'Privacy-First AI',
    ],
  },
  {
    icon: Users,
    title: 'Leadership',
    color: 'accent',
    skills: [
      '18+ Years Client-Facing',
      'Global Delivery & Architecture',
      'Team Mentoring & Enablement',
      'Startup & GTM Exposure',
      'Strategic Planning',
      'Stakeholder Management',
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Skills & Expertise</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Technical <span className="text-gradient">Mastery</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Combining deep technical expertise with strategic leadership to deliver enterprise-scale AI solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                category.color === 'primary' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-accent/10 text-accent'
              }`}>
                <category.icon size={24} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-4">{category.title}</h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${
                category.color === 'primary'
                  ? 'bg-primary/5'
                  : 'bg-accent/5'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
