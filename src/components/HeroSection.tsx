import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, Linkedin, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';
import adVideo from '@/assets/ad-demo.mp4';

const focusAreas = ['Enterprise GenAI', 'Agentic AI', 'Data Architecture', 'Cloud Data Platforms'];

export const HeroSection = () => {
  const [showAdVideo, setShowAdVideo] = useState(false);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-hero" aria-hidden="true">
        <div className="absolute -top-32 right-0 w-[560px] h-[560px] bg-primary/10 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.4) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground) / 0.4) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse at 70% 30%, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, black, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-16 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              18+ years in enterprise technology
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl whitespace-nowrap text-foreground">Prithviraj Bagchi</span>
              <span className="block mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-primary">
                Principal Consultant &amp; GenAI Generalist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-sm md:text-base text-foreground/80 mb-5"
            >
              <span className="font-medium text-foreground">AI &amp; Data Architect</span>
              <span className="text-muted-foreground"> · </span>
              {focusAreas.map((area, i) => (
                <span key={area}>
                  {area}
                  {i < focusAreas.length - 1 && <span className="text-muted-foreground"> | </span>}
                </span>
              ))}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              18+ years in enterprise technology, bridging data engineering and cloud architecture with practical GenAI, RAG, and agentic AI systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore My Work <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/60 text-foreground font-semibold hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <BookOpen size={18} aria-hidden="true" /> Research &amp; Publications
              </a>
              <a
                href="https://www.linkedin.com/in/prithviraj999/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-muted-foreground font-medium hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin size={18} aria-hidden="true" /> Connect on LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Profile card */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm"
            aria-label="Profile summary"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={profilePhoto}
                alt="Portrait of Prithviraj Bagchi"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover border border-border"
              />
              <div>
                <p className="font-display font-semibold">Prithviraj Bagchi</p>
                <p className="text-xs text-muted-foreground">AI &amp; Data Architect · NexusAI</p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden text-sm">
              {[
                ['Experience', '18+ years'],
                ['Focus', 'GenAI & Agents'],
                ['Foundation', 'Data Architecture'],
                ['Platforms', 'Cloud Data'],
              ].map(([k, v]) => (
                <div key={k} className="bg-card p-3">
                  <dt className="text-xs text-muted-foreground">{k}</dt>
                  <dd className="font-medium mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
            <button
              onClick={() => setShowAdVideo(true)}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
            >
              <Play size={15} aria-hidden="true" /> Watch the NexusAI demo
            </button>
          </motion.aside>
        </div>
      </div>

      {showAdVideo && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowAdVideo(false)}>
          <div className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowAdVideo(false)} aria-label="Close video" className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-background">
              <X size={20} />
            </button>
            <video src={adVideo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
};
