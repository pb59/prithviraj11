import { ArrowUpRight, BookOpen, Github, Globe, Linkedin, PlayCircle, Sparkles, Twitter } from 'lucide-react';

const publicationUrl = 'https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443439346000353';

const profileLinks = [
  { label: 'LinkedIn Profile', detail: 'Experience and perspectives', url: 'https://www.linkedin.com/in/prithviraj999/', icon: Linkedin },
  { label: 'YouTube Channel', detail: 'AI and technology videos', url: 'https://www.youtube.com/@prithvirajbagchi', icon: PlayCircle },
  { label: 'GitHub Projects', detail: 'Code and technical experiments', url: 'https://github.com/pb59', icon: Github },
  { label: 'Hugging Face', detail: 'Models and AI applications', url: 'https://huggingface.co/prithvi55', icon: Sparkles },
  { label: 'X Profile', detail: 'Updates from @wagmice', url: 'https://x.com/wagmice', icon: Twitter },
  { label: 'Portfolio & Newsletter', detail: 'Selected data and AI work', url: 'https://pb59.github.io/Newsletter1/', icon: Globe },
  { label: 'Published Research', detail: 'ScienceDirect book chapter', url: publicationUrl, icon: BookOpen },
];

export const ResearchSection = () => {
  return (
    <section id="research" className="section-padding scroll-mt-20 md:scroll-mt-24 bg-section-alt border-y border-border/60">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <p className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" /> Research &amp; Publications
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
            Applied AI research with real-world context
          </h2>
        </div>

        {/* Featured publication */}
        <article className="relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-10 mb-20">
          <div className="absolute inset-y-0 left-0 w-1 bg-primary" aria-hidden="true" />
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-5">
                <BookOpen size={15} aria-hidden="true" /> ScienceDirect Publication
              </p>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-4 max-w-3xl">
                Addressing India’s rural healthcare gaps utilizing generative artificial intelligence (AI) and agentic intelligence
              </h3>
              <p className="text-sm text-foreground/80 mb-4">
                Author: <span className="font-medium text-foreground">Prithviraj Bagchi</span>
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                A book chapter on applying generative AI and agentic intelligence to challenges in rural healthcare in India.
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Publication subjects">
                {['Generative AI', 'Agentic AI', 'Healthcare AI'].map((s) => (
                  <li key={s} className="px-3 py-1 text-xs rounded-md border border-border text-muted-foreground">{s}</li>
                ))}
              </ul>
            </div>
            <a
              href={publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label="Read Prithviraj Bagchi’s chapter on ScienceDirect (opens in a new tab)"
            >
              Read on ScienceDirect <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Profiles */}
        <div>
          <h2 className="font-display text-xl md:text-2xl font-semibold mb-2">Find Me Across the Web</h2>
          <p className="text-muted-foreground mb-8">Profiles &amp; publications by Prithviraj Bagchi.</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex items-center gap-3 p-4 rounded-lg border border-border bg-card/60 hover:border-primary/50 hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <link.icon size={17} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium group-hover:text-primary transition-colors">{link.label}</span>
                    <span className="block text-xs text-muted-foreground truncate">{link.detail}</span>
                  </span>
                  <ArrowUpRight size={15} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
