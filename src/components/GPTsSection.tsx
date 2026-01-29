import { ExternalLink, Sparkles, TrendingUp, GraduationCap, CreditCard } from 'lucide-react';

const customGPTs = [
  {
    name: 'Super Child GPT',
    description: 'An AI-powered educational assistant designed to empower children with interactive learning experiences. Makes education fun and engaging!',
    icon: GraduationCap,
    link: 'https://chatgpt.com/g/g-6979eb276e608191ab1b62df7bd19a71-super-child',
    category: 'Education',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'NiftyNavigator AI',
    description: 'Your intelligent companion for Nifty stock market analysis. Get insights, trends, and data-driven perspectives on Indian equity markets.',
    icon: TrendingUp,
    link: 'https://chatgpt.com/g/g-fOheKB07Q-niftynavigator-ai',
    category: 'Finance',
    color: 'from-blue-500 to-cyan-500',
  },
];

export const GPTsSection = () => {
  const gpayNumber = '9874290002';
  const gpayLink = `upi://pay?pa=${gpayNumber}@gpay&pn=Prithviraj%20Bagchi&cu=INR`;

  return (
    <section id="gpts" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border-glow text-sm font-medium text-primary mb-4">
            <Sparkles className="inline w-4 h-4 mr-2" />
            Custom GPTs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI Tools I've <span className="text-gradient">Created</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Purpose-built GPT applications designed to solve real-world problems — from educating children to analyzing stock markets.
          </p>
        </div>

        {/* GPTs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {customGPTs.map((gpt, index) => (
            <div
              key={gpt.name}
              className="glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gpt.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {gpt.category}
                </span>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gpt.color} flex items-center justify-center flex-shrink-0`}>
                    <gpt.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1">{gpt.name}</h3>
                    <p className="text-sm text-muted-foreground">{gpt.description}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={gpt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 mt-4"
                >
                  Try {gpt.name.split(' ')[0]}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GPay Payment Section */}
        <div className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="font-display text-2xl font-bold mb-2">Support My Work</h3>
          <p className="text-muted-foreground mb-6">
            If you find my GPTs useful, consider supporting my work. Your contribution helps me build more AI tools!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={gpayLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.75 5.25h1.5a.75.75 0 010 1.5h-1.5a2.25 2.25 0 00-2.25 2.25v1.5h3a.75.75 0 010 1.5h-3v6a.75.75 0 01-1.5 0v-6h-1.5a.75.75 0 010-1.5H9V9a3.75 3.75 0 013.75-3.75z"/>
              </svg>
              Pay via GPay
            </a>
            <div className="text-sm text-muted-foreground">
              GPay/UPI: <span className="font-mono text-foreground">{gpayNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
