const experiences = [
  {
    company: 'Accenture Services Ltd.',
    role: 'Associate Manager / Solution Architect',
    period: '2012 – Present',
    location: 'Global Client Coverage: US, Europe, APAC, Australia',
    highlights: [
      'Led 50+ enterprise modernization programs',
      'Designed and deployed GenAI & RAG-based solutions',
      'Defined GenAI adoption blueprints for Renault-Nissan, L\'Oréal, Rio Tinto, Alcoa, GEA',
      'Built multi-agent GenAI solutions using LangChain & Hugging Face',
      'Oversaw architecture of SQL Server, Azure Data Lake, and Synapse deployments',
    ],
    current: true,
  },
  {
    company: 'Tata Consultancy Services',
    role: 'SQL Server DBA',
    period: '2010 – 2012',
    location: 'India',
    highlights: [
      'Modernization and migration SPOC for enterprise clients',
      'Database performance optimization and management',
    ],
    current: false,
  },
  {
    company: 'Saregama India Ltd.',
    role: 'Team Leader',
    period: '2009 – 2010',
    location: 'India',
    highlights: [
      'Led technical team for database operations',
      'Media and entertainment industry experience',
    ],
    current: false,
  },
  {
    company: 'Wipro Infotech',
    role: 'DBA / System Engineer',
    period: '2007 – 2009',
    location: 'India',
    highlights: [
      'Started professional career in database administration',
      'Foundation in enterprise systems',
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Career Journey</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            18+ Years of <span className="text-gradient">Global Impact</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From database administration to leading enterprise AI transformations across Fortune 500 clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Current
                      </span>
                    )}

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-primary/80 font-medium">{exp.role}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.period} • {exp.location}
                      </p>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
