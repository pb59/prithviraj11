import { Check, Sparkles, Users, Building2, Rocket, Clock, Video, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'GenAI Starter',
    subtitle: 'For Junior Professionals',
    price: '2,999',
    duration: 'per session',
    description: 'Perfect for early-career professionals starting their GenAI journey',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    features: [
      '1-hour 1:1 video session',
      'Personalized learning roadmap',
      'Resource recommendations',
      'Career guidance in AI/ML',
      'Email follow-up support',
      'Session recording access',
    ],
    popular: false,
    cta: 'Book Session',
    calendlyLink: 'https://calendly.com/prithvi-genai/starter',
  },
  {
    name: 'GenAI Pro',
    subtitle: 'Most Popular',
    price: '4,999',
    duration: 'per session',
    description: 'Comprehensive mentoring for serious AI practitioners',
    icon: Rocket,
    color: 'from-primary to-accent',
    features: [
      '90-minute deep-dive session',
      'Code review & architecture guidance',
      'LLM fine-tuning strategies',
      'RAG pipeline optimization',
      'Interview preparation',
      'Priority email support (48hrs)',
      'Access to private resources',
    ],
    popular: true,
    cta: 'Get Started',
    calendlyLink: 'https://calendly.com/prithvi-genai/pro',
  },
  {
    name: 'Enterprise',
    subtitle: 'For Organizations',
    price: '15,000',
    duration: 'per session',
    description: 'Strategic AI consulting for teams and enterprises',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    features: [
      '2-hour strategy session',
      'GenAI adoption roadmap',
      'Team training recommendations',
      'Architecture review',
      'Vendor evaluation support',
      'ROI assessment framework',
      'Post-session report',
      'Dedicated Slack channel (1 week)',
    ],
    popular: false,
    cta: 'Contact Me',
    calendlyLink: 'https://calendly.com/prithvi-genai/enterprise',
  },
];

const bootcampPlan = {
  name: '4-Week GenAI Bootcamp',
  price: '24,999',
  originalPrice: '39,999',
  description: 'Transform from beginner to production-ready GenAI developer',
  features: [
    '8 live 1:1 sessions (2 per week)',
    'Hands-on projects with real datasets',
    'Build your own RAG application',
    'Fine-tune an LLM from scratch',
    'Deploy to cloud (AWS/Azure)',
    'LinkedIn-ready portfolio projects',
    'Certificate of completion',
    'Lifetime access to recordings',
    '3 months of email support',
  ],
};

export const PricingSection = () => {
  const razorpayLink = 'https://razorpay.me/@prithvirajbagchi';
  
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border-glow text-sm font-medium text-primary mb-4">
            <Sparkles className="inline w-4 h-4 mr-2" />
            Investment in Your Future
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient">Growth Path</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible options for every stage of your GenAI journey. All sessions include actionable insights you can implement immediately.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                <plan.icon className="w-7 h-7 text-white" />
              </div>

              {/* Plan Info */}
              <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.duration}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 font-semibold ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                onClick={() => window.open(plan.calendlyLink, '_blank')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bootcamp Banner */}
        <div className="relative glass rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                🎓 Limited Seats
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {bootcampPlan.name}
              </h3>
              <p className="text-muted-foreground mb-6">{bootcampPlan.description}</p>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl font-bold text-gradient">₹{bootcampPlan.price}</span>
                <span className="text-xl text-muted-foreground line-through">₹{bootcampPlan.originalPrice}</span>
                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-sm font-medium">
                  Save 38%
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => window.open('https://calendly.com/prithvi-genai/bootcamp-intro', '_blank')}
                >
                  <Video className="w-5 h-5 mr-2" />
                  Book Free Intro Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open(razorpayLink, '_blank')}
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {bootcampPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Secure payments via</p>
          <div className="flex items-center justify-center gap-6 opacity-60">
            <span className="font-semibold">Razorpay</span>
            <span className="font-semibold">GPay</span>
            <span className="font-semibold">UPI</span>
            <span className="font-semibold">Cards</span>
            <span className="font-semibold">Net Banking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
