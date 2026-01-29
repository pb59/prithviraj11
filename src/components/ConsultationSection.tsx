import { useState } from 'react';
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle, Briefcase, Target, Zap } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const learningBenefits = [
  { icon: Zap, text: 'Master LLM Fine-Tuning & RAG Pipelines' },
  { icon: Target, text: 'Build Production-Ready GenAI Applications' },
  { icon: Briefcase, text: 'Enterprise AI Strategy & Implementation' },
  { icon: CheckCircle, text: 'Hands-on Projects with Real-World Data' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
];

export const ConsultationSection = () => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !formData.name || !formData.email) {
      toast.error('Please fill all required fields');
      return;
    }

    const formattedDate = format(date, 'PPP');
    const subject = encodeURIComponent(`GenAI Consultation Request - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nPreferred Date: ${formattedDate}\nPreferred Time: ${timeSlot}\n\nMessage:\n${formData.message || 'No additional message'}`
    );
    
    window.location.href = `mailto:me.prithvi55@gmail.com?subject=${subject}&body=${body}`;
    toast.success('Opening email client with your booking details!');
  };

  return (
    <section id="consultation" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border-glow text-sm font-medium text-primary mb-4">
            1-to-1 Learning
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Become a <span className="text-gradient">GenAI Expert</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personalized coaching for corporate professionals looking to master Generative AI. 
            Learn directly from an industry practitioner with 18+ years of experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">What You'll Learn</h3>
              <div className="space-y-4">
                {learningBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 glass rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4">Why Learn With Me?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>18+ years of hands-on engineering & leadership experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-world GenAI implementations for Fortune 500 clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom curriculum tailored to your goals and industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexible scheduling with ongoing mentorship support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Appointment Scheduler */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Book a Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className="bg-background/50"
                />
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Preferred Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-background/50",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Preferred Time *
                  </Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-background">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your learning goals..."
                  rows={4}
                  className="bg-background/50"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90"
              >
                Schedule Consultation
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * This will open your email client with the booking details pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
