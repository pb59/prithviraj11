import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Talk2SQL',
    subtitle: 'Natural Language → SQL Analytics',
    description:
      'A GenAI-powered analytics application enabling business users to query databases using natural language. Reduced query turnaround time by ~40%.',
    tags: ['GenAI', 'NLP', 'SQL', 'Analytics'],
    links: [
      { label: 'Live Demo', url: 'https://pb59.github.io/Newsletter1/', icon: ExternalLink },
      { label: 'Hugging Face', url: 'https://huggingface.co/spaces/prithvi55/talk2data', icon: null, emoji: '🤗' },
    ],
    featured: true,
  },
  {
    title: 'Hugging Face – LLM Fine-Tuning',
    subtitle: 'Open-source GenAI Work',
    description:
      'Fine-tuned domain-specific language models for enterprise use cases such as customer support, analytics, and SQL generation. Published models with documentation demonstrating cost-efficient workflows.',
    tags: ['LLM', 'Fine-Tuning', 'Open Source', 'Hugging Face'],
    links: [
      { label: 'Hugging Face', url: 'https://huggingface.co/prithvi55', icon: null, emoji: '🤗' },
      { label: 'GitHub', url: 'https://github.com/pb59', icon: Github },
    ],
    featured: true,
  },
  {
    title: 'Wagmice AI',
    subtitle: 'GenAI + Blockchain Experiment (Founder)',
    description:
      'Experimental startup exploring tokenized certification, AI-driven validation, and decentralized trust mechanisms. Integrating GenAI, blockchain, and quantum computing concepts.',
    tags: ['Startup', 'Blockchain', 'GenAI', 'Web3'],
    links: [
      { label: 'Website', url: 'https://pb59.github.io/WagmiceToken/', icon: ExternalLink },
      { label: 'X/Twitter', url: 'https://x.com/wagmice', icon: null, emoji: '🐦' },
    ],
    featured: true,
  },
  {
    title: 'Quantum AI Prototype',
    subtitle: 'Research Initiative',
    description:
      'Research exploring quantum computing techniques to optimize feed-forward layers in LLMs for performance gains. Cutting-edge intersection of quantum computing and AI.',
    tags: ['Quantum AI', 'Research', 'LLM Optimization'],
    links: [],
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Featured Projects</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Building the <span className="text-gradient">Future of AI</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From production-ready GenAI applications to experimental research — explore my open-source contributions and ventures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? 'border-l-2 border-l-primary' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Featured
                </span>
              )}

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/80 mt-1">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.emoji && <span>{link.emoji}</span>}
                        {link.icon && <link.icon size={14} />}
                        {link.label}
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
