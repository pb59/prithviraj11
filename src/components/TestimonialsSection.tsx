import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Data Engineer',
    company: 'TCS',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
    content: 'Prithviraj\'s mentoring completely transformed my career trajectory. Within 3 months of our sessions, I transitioned from traditional ETL to building production RAG systems. His practical approach and real-world examples made complex concepts click instantly.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'ML Engineer',
    company: 'Infosys',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha',
    content: 'The bootcamp was intense but incredibly rewarding. I went from knowing basic Python to deploying a fine-tuned LLM on AWS. The hands-on projects gave me confidence to lead GenAI initiatives at my company.',
    rating: 5,
  },
  {
    name: 'Arjun Menon',
    role: 'Tech Lead',
    company: 'Wipro',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun',
    content: 'As a tech lead, I needed to upskill quickly to guide my team on GenAI projects. Prithviraj\'s enterprise consultation helped us define a clear AI strategy and avoid common pitfalls. ROI was visible within the first quarter.',
    rating: 5,
  },
  {
    name: 'Priya Krishnan',
    role: 'Data Scientist',
    company: 'Accenture',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    content: 'The 1:1 sessions were exactly what I needed. Prithviraj helped me prepare for senior ML engineer interviews and I landed a role with 40% salary hike. His insights on LLM architecture questions were spot on!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Product Manager',
    company: 'Flipkart',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
    content: 'Even as a PM with limited technical background, Prithviraj made GenAI concepts accessible. I can now confidently discuss LLM capabilities, limitations, and costs with my engineering team.',
    rating: 5,
  },
  {
    name: 'Ananya Gupta',
    role: 'Junior Developer',
    company: 'Freshworks',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ananya',
    content: 'Started as a complete beginner and now I\'m building chatbots for our customer support team. The structured learning path and patient explanations made all the difference. Best investment in my career!',
    rating: 5,
  },
];

const stats = [
  { value: '50+', label: 'Mentees Trained' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '85%', label: 'Got Promotions' },
  { value: '₹12L+', label: 'Avg Salary Hike' },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border-glow text-sm font-medium text-primary mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            What My <span className="text-gradient">Mentees Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from professionals who invested in their GenAI skills
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-secondary"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Start Your GenAI Journey
          </a>
        </div>
      </div>
    </section>
  );
};
