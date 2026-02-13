import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#testimonials', label: 'Results' },
  { href: '/#contact', label: 'Contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass border-b border-border/30 shadow-lg shadow-background/50' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-gradient">NexusAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isRoute = !link.href.startsWith('/#');
              const className = `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`;
              const indicator = isActive(link.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20 -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              );
              return isRoute ? (
                <Link key={link.href} to={link.href} onClick={() => handleNavClick(link.href)} className={className}>
                  {link.label}{indicator}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => handleNavClick(link.href)} className={className}>
                  {link.label}{indicator}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            to="/pricing"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border/30 overflow-hidden"
            >
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => {
                  const isRoute = !link.href.startsWith('/#');
                  const cls = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-secondary/50";
                  return isRoute ? (
                    <Link key={link.href} to={link.href} className={cls} onClick={() => handleNavClick(link.href)}>
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} className={cls} onClick={() => handleNavClick(link.href)}>
                      {link.label}
                    </a>
                  );
                })}
                <Link
                  to="/pricing"
                  className="mx-4 mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
