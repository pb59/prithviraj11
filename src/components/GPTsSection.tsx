import { useState } from 'react';
import { ExternalLink, Sparkles, TrendingUp, GraduationCap, CreditCard, Brain, Play, X } from 'lucide-react';
import gpayQrImage from '@/assets/gpay-qr.png';
import superchildVideo from '@/assets/superchild-demo.mp4';

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
  {
    name: 'Gemini Gem Algo',
    description: 'Advanced algorithmic trading insights powered by Google Gemini. Explore AI-driven market strategies and quantitative analysis.',
    icon: Brain,
    link: 'https://gemini.google.com/gem-labs/1hXdeM3FHJciASuhiFzi69uvp2y5aFu1q',
    category: 'Trading & AI',
    color: 'from-purple-500 to-pink-500',
  },
];

export const GPTsSection = () => {
  const [showSuperchildVideo, setShowSuperchildVideo] = useState(false);
  const upiId = 'i.prithvi99@okicici';
  const gpayLink = `upi://pay?pa=${upiId}&pn=Prithviraj%20Bagchi&cu=INR`;

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

                {/* CTA Buttons */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={gpt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    Try {gpt.name.split(' ')[0]}
                    <ExternalLink size={16} />
                  </a>
                  {gpt.name === 'Super Child GPT' && (
                    <button
                      onClick={() => setShowSuperchildVideo(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-all"
                    >
                      <Play size={16} /> Watch Demo
                    </button>
                  )}
                </div>
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
          
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white rounded-2xl p-4 inline-block">
              <img src={gpayQrImage} alt="Scan to pay via GPay UPI" className="w-48 h-48 object-contain" />
            </div>
            <div className="text-sm text-muted-foreground">
              UPI ID: <span className="font-mono text-foreground">{upiId}</span>
            </div>
            <a
              href={gpayLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Pay via UPI App
            </a>
          </div>
        </div>
      </div>

      {/* SuperChild Video Modal */}
      {showSuperchildVideo && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowSuperchildVideo(false)}>
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-card border border-border shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowSuperchildVideo(false)} className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-background">
              <X size={20} />
            </button>
            <video src={superchildVideo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
};
