import { useState } from 'react';
import { Download, Mail, Sparkles, FileText, Video, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const freeResources = [
  {
    icon: FileText,
    title: 'GenAI Career Roadmap 2026',
    description: 'Complete guide to transitioning into GenAI roles with salary benchmarks',
    type: 'PDF Guide',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Video,
    title: 'LLM Fundamentals Masterclass',
    description: '2-hour recorded session covering transformers, attention, and fine-tuning',
    type: 'Video',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'RAG Implementation Checklist',
    description: 'Step-by-step checklist for building production-ready RAG systems',
    type: 'Checklist',
    color: 'from-green-500 to-emerald-500',
  },
];

export const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - In production, connect to your email service (Mailchimp, ConvertKit, etc.)
    setTimeout(() => {
      // Open mailto with pre-filled content
      const subject = encodeURIComponent('GenAI Resources Request');
      const body = encodeURIComponent(
        `Hi Prithviraj,\n\nI'd like to receive the free GenAI resources.\n\nMy email: ${email}\n\nThank you!`
      );
      window.location.href = `mailto:me.prithvi55@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success('Check your email for the resources!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="resources" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full border-glow text-sm font-medium text-primary mb-4">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Free Resources
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Kickstart Your <span className="text-gradient">GenAI Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get instant access to my curated resources that have helped 50+ professionals transition into high-paying GenAI roles.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-6 text-base bg-background/50"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="py-6 px-8 font-semibold"
                disabled={isSubmitting}
              >
                <Download className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Get Free Access'}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              🔒 No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Right Column - Resources Preview */}
          <div className="space-y-4">
            {freeResources.map((resource, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center flex-shrink-0`}>
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{resource.title}</h4>
                    <span className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              500+ Downloads
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Trusted by TCS, Infosys, Wipro professionals
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Updated for 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
