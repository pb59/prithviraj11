import { Linkedin, Github, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-xl text-gradient">PB</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Prithviraj Bagchi. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/prithviraj999/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/pb59"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://huggingface.co/prithvi55"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Hugging Face"
            >
              <span className="text-lg">🤗</span>
            </a>
            <a
              href="https://x.com/wagmice"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <span className="text-lg">🐦</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
