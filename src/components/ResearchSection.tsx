import {
  ArrowUpRight,
  BookOpen,
  Github,
  Linkedin,
  PlayCircle,
} from 'lucide-react';

const publicationUrl = 'https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443439346000353';

const profileLinks = [
  {
    label: 'LinkedIn profile',
    detail: 'Professional experience and perspectives',
    url: 'https://www.linkedin.com/in/prithviraj999/',
    icon: Linkedin,
  },
  {
    label: 'YouTube channel',
    detail: 'AI and technology videos',
    url: 'https://www.youtube.com/@prithvirajbagchi',
    icon: PlayCircle,
  },
  {
    label: 'GitHub projects',
    detail: 'Code and technical experiments',
    url: 'https://github.com/pb59',
    icon: Github,
  },
  {
    label: 'Hugging Face profile',
    detail: 'Models and AI applications',
    url: 'https://huggingface.co/prithvi55',
    icon: BookOpen,
  },
  {
    label: 'X profile',
    detail: 'Updates from @wagmice',
    url: 'https://x.com/wagmice',
    icon: ArrowUpRight,
  },
  {
    label: 'Project portfolio',
    detail: 'Selected data and AI work',
    url: 'https://pb59.github.io/Newsletter1/',
    icon: ArrowUpRight,
  },
];

export const ResearchSection = () => {
  return (
    <section id="research" className="section-padding scroll-mt-20 md:scroll-mt-24 bg-section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Research &amp; Publications</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6">
              Applied AI research with <span className="text-gradient">real-world context</span>
            </h2>

            <article className="p-6 md:p-8 rounded-xl border border-border/60 bg-card/50">
              <div className="flex items-center gap-2 text-sm text-primary mb-4">
                <BookOpen size={18} aria-hidden="true" />
                <span>ScienceDirect book chapter</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug mb-3">
                Addressing India’s rural healthcare gaps utilizing generative artificial intelligence (AI) and agentic intelligence
              </h3>
              <p className="text-muted-foreground mb-5">Author: Prithviraj Bagchi</p>
              <div className="flex flex-wrap gap-2 mb-6" aria-label="Publication subjects">
                {['Generative AI', 'Agentic AI', 'Healthcare AI'].map((subject) => (
                  <span key={subject} className="px-3 py-1.5 text-sm rounded-full bg-secondary/60 text-muted-foreground">
                    {subject}
                  </span>
                ))}
              </div>
              <a
                href={publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-foreground transition-colors"
                aria-label="Read Prithviraj Bagchi’s chapter on ScienceDirect"
              >
                Read the chapter on ScienceDirect <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Profiles &amp; Publications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <link.icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium group-hover:text-primary transition-colors">{link.label}</span>
                    <span className="block text-sm text-muted-foreground">{link.detail}</span>
                  </span>
                  <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                </a>
              ))}
              <a
                href={publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <BookOpen size={19} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium group-hover:text-primary transition-colors">ScienceDirect publication</span>
                  <span className="block text-sm text-muted-foreground">Generative and agentic AI in healthcare</span>
                </span>
                <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};