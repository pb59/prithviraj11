import { Linkedin, Mail, Download, ExternalLink, Github } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow text-sm font-medium opacity-0 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">Open to Opportunities</span>
              </div>

              {/* Name */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-up stagger-1">
                <span className="text-foreground">Prithviraj </span>
                <span className="text-gradient">Bagchi</span>
              </h1>

              {/* Title */}
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground opacity-0 animate-fade-in-up stagger-2">
                Engineering Leader <span className="text-primary">|</span> Generative AI Architect <span className="text-primary">|</span> Cloud & Data Modernization
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up stagger-3">
                18+ years of global experience building enterprise-scale data platforms and Generative AI solutions. 
                I bridge research to real-world impact — from fine-tuning LLMs to leading AI adoption across Fortune 500 clients.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 opacity-0 animate-fade-in-up stagger-4">
                <a
                  href="https://www.linkedin.com/in/prithviraj999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 glow-primary"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:bg-secondary transition-all hover:scale-105"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
                <a
                  href="https://github.com/pb59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:bg-secondary transition-all hover:scale-105"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm opacity-0 animate-fade-in-up stagger-5">
                <a
                  href="https://huggingface.co/prithvi55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  🤗 Hugging Face
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://huggingface.co/spaces/prithvi55/talk2data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  🚀 Talk2SQL Demo
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-up stagger-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full border-glow p-1 animate-float">
                <img
                  src={profilePhoto}
                  alt="Prithviraj Bagchi - GenAI Architect"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/80 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-accent/80 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up stagger-6">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};
