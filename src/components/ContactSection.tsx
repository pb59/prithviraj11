import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prithviraj999/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/pb59',
    icon: Github,
  },
  {
    label: 'Hugging Face',
    url: 'https://huggingface.co/prithvi55',
    icon: null,
    emoji: '🤗',
  },
  {
    label: 'X (Twitter)',
    url: 'https://x.com/wagmice',
    icon: null,
    emoji: '🐦',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Get In Touch</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Open to leadership roles, AI architecture discussions, enterprise consulting, and startup collaborations.
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative p-8 md:p-12 rounded-3xl border-glow bg-card/30">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold">Contact Information</h3>
                
                <div className="space-y-3">
                  <a
                    href="mailto:me.prithvi55@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email (Primary)</p>
                      <p className="text-foreground font-medium">me.prithvi55@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="mailto:i.prithvi99@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email (Alternate)</p>
                      <p className="text-foreground font-medium">i.prithvi99@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919874290002"
                    className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91-9874290002</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919874290002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="text-lg">💬</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="text-foreground font-medium">+91-9874290002</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold">Connect With Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all group hover:-translate-y-1"
                    >
                      {link.icon ? (
                        <link.icon size={20} className="text-primary" />
                      ) : (
                        <span className="text-xl">{link.emoji}</span>
                      )}
                      <span className="font-medium">{link.label}</span>
                      <ExternalLink size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative mt-8 pt-8 border-t border-border/50 text-center">
              <a
                href="mailto:me.prithvi55@gmail.com?subject=Let's%20Talk%20-%20AI%20Collaboration"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 glow-primary"
              >
                <Mail size={20} />
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
