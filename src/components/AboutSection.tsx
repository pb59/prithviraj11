import { MapPin, Briefcase, BookOpen, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    label: 'Global Presence',
    value: 'US, Europe, APAC, Australia',
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '18+ Years',
  },
  {
    icon: BookOpen,
    label: 'Projects Led',
    value: '50+ Modernization Programs',
  },
  {
    icon: Rocket,
    label: 'Users Impacted',
    value: '200K+ Enterprise Users',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
            Bridging AI Research to <span className="text-gradient">Enterprise Impact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an <span className="text-foreground font-medium">Engineering Leader</span> and <span className="text-primary font-medium">Generative AI Architect</span> with nearly two decades of global, client-facing experience across the US, Europe, APAC, and Australia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans <span className="text-foreground font-medium">enterprise cloud modernization</span>, large-scale data engineering, and applied Generative AI — including LLM fine-tuning, RAG pipelines, and multi-agent systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I currently lead AI and data modernization initiatives at <span className="text-foreground font-medium">Accenture</span> and actively build open-source GenAI products on Hugging Face and GitHub. I am also the founder of <span className="text-accent font-medium">Wagmice AI</span>, an experimental venture exploring the intersection of Generative AI, blockchain, and emerging technologies.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl border-glow bg-card/30">
              {/* Core Strengths */}
              <h3 className="font-display text-xl font-semibold mb-6 text-gradient">Core Strengths</h3>
              <ul className="space-y-4">
                {[
                  'Leadership at Scale: 18 years leading Data Engineering & Solution Architecture across global enterprises',
                  'Generative AI Expertise: Fine-tuning LLMs, RAG pipelines, LangChain, multi-agent orchestration',
                  'Enterprise Modernization: Led 50+ data/analytics programs impacting 200K+ users',
                  'Cloud & Data Platforms: Deep expertise in Azure, AWS, SQL Server, GCP',
                  'Responsible AI & Security: Established adoption frameworks with bias detection & compliance',
                  'Startup Leadership: Founder of Wagmice AI – GenAI + blockchain + quantum solutions',
                ].map((strength, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
