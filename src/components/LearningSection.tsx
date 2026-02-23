import { BookOpen, Brain, Sparkles, Target } from 'lucide-react';
import genaiJourney from '@/assets/genai-journey.png';
import aiTaxonomy from '@/assets/ai-taxonomy.png';
import nlpVenn from '@/assets/nlp-venn.webp';
import aiBranches from '@/assets/ai-branches.png';
import genaiRoadmap from '@/assets/genai-roadmap.png';
import genaiVideo from '@/assets/genai-intro-video.mp4';

const learningTopics = [
  {
    icon: Brain,
    title: 'AI Fundamentals',
    description: 'Understand AI, ML, Deep Learning taxonomy and how they interconnect.',
  },
  {
    icon: BookOpen,
    title: 'NLP & Language Models',
    description: 'Master NLP concepts, transformers, and large language model architectures.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Learn prompt engineering, fine-tuning, RAG pipelines, and multi-agent systems.',
  },
  {
    icon: Target,
    title: 'Enterprise Applications',
    description: 'Apply GenAI to real-world business problems with responsible AI practices.',
  },
];

export const LearningSection = () => {
  return (
    <section id="learning" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border-glow text-sm font-medium text-primary mb-4">
            Learning Path
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            GenAI <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured roadmap to master Generative AI — from foundational concepts to enterprise-grade implementations.
          </p>
        </div>

        {/* Learning Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {learningTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>

        {/* Infographics Gallery */}
        <div className="space-y-8">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Visual Learning Resources
          </h3>

          {/* Intro Video */}
          <div className="glass rounded-xl p-4 overflow-hidden">
            <video
              src={genaiVideo}
              controls
              className="w-full rounded-lg"
              poster={genaiJourney}
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-center mt-3 text-muted-foreground">
              🎬 GenAI Learning Journey — Watch the overview
            </p>
          </div>

          {/* Main Journey Image */}
          <div className="glass rounded-xl p-4 overflow-hidden">
            <img
              src={genaiJourney}
              alt="GenAI Learning Journey - Complete roadmap from basics to advanced"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Supporting Diagrams Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-3 overflow-hidden hover:border-primary/50 transition-all">
              <img
                src={aiTaxonomy}
                alt="AI/ML/DL Taxonomy Diagram"
                className="w-full h-48 object-contain rounded-lg bg-background/50"
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">AI Taxonomy</p>
            </div>
            <div className="glass rounded-xl p-3 overflow-hidden hover:border-primary/50 transition-all">
              <img
                src={nlpVenn}
                alt="NLP Concepts Venn Diagram"
                className="w-full h-48 object-contain rounded-lg bg-background/50"
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">NLP Concepts</p>
            </div>
            <div className="glass rounded-xl p-3 overflow-hidden hover:border-primary/50 transition-all">
              <img
                src={aiBranches}
                alt="AI Branches and Applications"
                className="w-full h-48 object-contain rounded-lg bg-background/50"
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">AI Branches</p>
            </div>
            <div className="glass rounded-xl p-3 overflow-hidden hover:border-primary/50 transition-all">
              <img
                src={genaiRoadmap}
                alt="GenAI Implementation Roadmap"
                className="w-full h-48 object-contain rounded-lg bg-background/50"
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">GenAI Roadmap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
