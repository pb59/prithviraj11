import { useState } from 'react';
import { ArrowRight, Play, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';
import adVideo from '@/assets/ad-demo.mp4';

export const HeroSection = () => {
  const [showAdVideo, setShowAdVideo] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">Enterprise AI Solutions by Prithviraj Bagchi</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            AI Products That
            <br />
            <span className="text-gradient">Transform Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            From custom GPTs to enterprise AI consulting — 18+ years of building GenAI solutions for Fortune 500 clients, now available to you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => setShowAdVideo(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/30 text-foreground font-semibold text-lg hover:bg-secondary/60 transition-all hover:scale-105"
            >
              <Play size={18} />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: '18+', label: 'Years Experience' },
              { value: '200K+', label: 'Users Impacted' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '4.9/5', label: 'Client Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile + Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <img src={profilePhoto} alt="Prithviraj Bagchi" className="w-12 h-12 rounded-full border-2 border-primary/50" />
          <div className="text-left">
            <p className="font-semibold text-sm">Built by Prithviraj Bagchi</p>
            <p className="text-xs text-muted-foreground">GenAI Architect • Accenture • Wagmice AI Founder</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
      {/* Ad Video Modal */}
      {showAdVideo && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowAdVideo(false)}>
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-card border border-border shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowAdVideo(false)} className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-background">
              <X size={20} />
            </button>
            <video src={adVideo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
};
