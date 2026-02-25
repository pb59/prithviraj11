import { Linkedin, Github, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-gradient">NexusAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">AI products & consulting by Prithviraj Bagchi</p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold text-sm mb-3">Platform</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Resources</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="https://huggingface.co/prithvi55" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hugging Face</a>
                <a href="https://github.com/pb59" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex md:justify-end items-start gap-3">
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=prithviraj999" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/pb59" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://huggingface.co/prithvi55" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="Hugging Face">
              <span className="text-lg">🤗</span>
            </a>
            <a href="https://x.com/wagmice" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors" aria-label="X">
              <span className="text-lg">🐦</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          © {currentYear} Prithviraj Bagchi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
