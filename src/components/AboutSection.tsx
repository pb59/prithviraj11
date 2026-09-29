import { Briefcase, Brain, Cloud, Database } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    label: 'Experience',
    value: '18+ Years',
  },
  {
    icon: Brain,
    label: 'AI Focus',
    value: 'GenAI & Agentic AI',
  },
  {
    icon: Database,
    label: 'Data Focus',
    value: 'Architecture & Engineering',
  },
  {
    icon: Cloud,
    label: 'Platforms',
    value: 'Cloud Data & Analytics',
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
            Prithviraj Bagchi: from data platforms to <span className="text-gradient">enterprise AI</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m <span className="text-foreground font-medium">Prithviraj Bagchi</span>, a <span className="text-primary font-medium">Principal Consultant &amp; GenAI Generalist</span> with <span className="text-foreground font-medium">18+ years</span> in enterprise technology and an AI &amp; Data Architect specialization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work connects <span className="text-foreground font-medium">data architecture, data engineering, analytics, and cloud data platforms</span> with applied Generative AI — including RAG, LLM applications, and agentic AI systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through <span className="text-accent font-medium">NexusAI</span>, I build GPTs and AI tools including Super Child GPT, NiftyNavigator AI, Gemini Gem Algo, and Talk2SQL, alongside open-source work on Hugging Face and GitHub.
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
                  'AI & Data Architecture: Connecting enterprise data foundations with AI-enabled systems',
                  'Generative AI: RAG pipelines, LLM applications, LangChain, and agentic workflows',
                  'Data Architecture: Data engineering, analytics, SQL, and enterprise data platforms',
                  'Cloud Data Platforms: Azure, AWS, Google Cloud, SQL Server, and Synapse',
                  'Responsible AI: Governance, risk assessment, security, and reliable adoption',
                  'Product Building: NexusAI GPTs, AI tools, and open-source experimentation',
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
