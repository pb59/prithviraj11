import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, User, Send, Trash2 } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  postId: string;
}

const blogPosts = [
  {
    id: 'genai-enterprise',
    title: 'Why Every Enterprise Needs a GenAI Strategy in 2025',
    excerpt: 'Generative AI is no longer experimental — it\'s a competitive necessity. Here\'s how enterprises can build a practical GenAI roadmap.',
    content: `The landscape of enterprise technology has shifted. Generative AI is changing how teams approach knowledge work, customer service, analytics, and software delivery.\n\nThe key is not simply adopting AI — it is having a clear strategy grounded in reliable data and responsible architecture.\n\nHere are the pillars of a strong GenAI strategy:\n\n1. **Identify High-Impact Use Cases** — Start with processes that are repetitive, data-heavy, or customer-facing.\n2. **Build vs Buy** — Evaluate whether custom models or API-based solutions fit better.\n3. **Data Readiness** — AI systems depend on well-governed data pipelines.\n4. **Responsible AI** — Implement guardrails for bias, hallucination, and privacy.\n5. **Measure & Iterate** — Set relevant measures and improve from evidence.\n\nNexusAI explores this journey through consulting perspectives and purpose-built AI tools.`,
    date: '2025-02-20',
    author: 'Prithviraj Bagchi',
    tags: ['GenAI', 'Enterprise', 'Strategy'],
  },
  {
    id: 'algo-trading-ai',
    title: 'How AI is Revolutionizing Algorithmic Trading in India',
    excerpt: 'From rule-based strategies to AI-driven decision making — the evolution of algo trading and what it means for retail traders.',
    content: `Algorithmic trading has come a long way from simple moving average crossovers. Today, AI and machine learning models are analyzing sentiment, news, and multi-dimensional market data in real-time.\n\nIndia's retail trading community is rapidly adopting AI tools. Here's what's changed:\n\n- **Sentiment Analysis**: NLP models parse news, social media, and earnings calls to gauge market mood.\n- **Pattern Recognition**: Deep learning identifies chart patterns humans might miss.\n- **Risk Management**: AI dynamically adjusts position sizes based on volatility.\n- **Backtesting at Scale**: Test thousands of strategies in minutes, not days.\n\nOur **Gemini Gem Algo** tool leverages Google's Gemini to provide accessible, AI-driven trading insights for the Indian market.\n\nThe future of trading is intelligent, adaptive, and available to everyone.`,
    date: '2025-02-15',
    author: 'Prithviraj Bagchi',
    tags: ['Algo Trading', 'AI', 'India', 'Finance'],
  },
  {
    id: 'superchild-education',
    title: 'Building Super Child GPT: AI for Children\'s Education',
    excerpt: 'The story behind creating an AI educational assistant that makes learning fun, safe, and interactive for kids.',
    content: `Education is one area where carefully designed AI can support exploration. That's why I built **Super Child GPT** — an AI assistant designed for children's learning.\n\nThe design considerations were distinct:\n\n- **Safety First**: Responses should be age-appropriate and educational.\n- **Engagement**: Stories, quizzes, and interactive elements can make exploration approachable.\n- **Adaptive Learning**: The assistant can adjust difficulty based on a child's responses.\n- **Parent Trust**: Transparency matters in what the AI teaches and how it interacts.\n\nSuper Child GPT explores conversational learning across science, math, languages, and creativity.\n\nThe vision is to make AI-supported education more accessible while keeping safety and clarity central.`,
    date: '2025-02-10',
    author: 'Prithviraj Bagchi',
    tags: ['Education', 'GPT', 'Children', 'AI'],
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('nexusai-blog-comments');
    if (saved) setComments(JSON.parse(saved));
  }, []);

  const saveComments = (updated: Comment[]) => {
    setComments(updated);
    localStorage.setItem('nexusai-blog-comments', JSON.stringify(updated));
  };

  const addComment = (postId: string) => {
    if (!commentName.trim() || !commentText.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      name: commentName.trim().slice(0, 100),
      text: commentText.trim().slice(0, 500),
      date: new Date().toISOString(),
      postId,
    };
    saveComments([...comments, newComment]);
    setCommentName('');
    setCommentText('');
  };

  const deleteComment = (id: string) => {
    saveComments(comments.filter((c) => c.id !== id));
  };

  const post = blogPosts.find((p) => p.id === selectedPost);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Blog</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Insights & <span className="text-gradient">Ideas</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Thoughts on GenAI, algo trading, AI products, and building the future.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            {!post ? (
              <div className="space-y-8">
                {blogPosts.map((p, i) => (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-8 hover:border-primary/30 transition-all cursor-pointer group"
                    onClick={() => setSelectedPost(p.id)}
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
                    <p className="text-muted-foreground mb-4">{p.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><User size={14} /> {p.author}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(p.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><MessageSquare size={14} /> {comments.filter((c) => c.postId === p.id).length} comments</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <button onClick={() => setSelectedPost(null)} className="text-primary font-medium mb-6 hover:underline">← Back to all posts</button>
                <article className="glass rounded-2xl p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {post.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    ))}
                  </div>
                </article>

                {/* Comments */}
                <div className="mt-12">
                  <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                    <MessageSquare size={24} /> Comments ({comments.filter((c) => c.postId === post.id).length})
                  </h3>

                  {/* Add Comment */}
                  <div className="glass rounded-xl p-6 mb-8">
                    <div className="flex flex-col sm:flex-row gap-3 mb-3">
                      <input
                        placeholder="Your name"
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                        maxLength={100}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="flex gap-3">
                      <input
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        maxLength={500}
                        onKeyDown={(e) => e.key === 'Enter' && addComment(post.id)}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <button
                        onClick={() => addComment(post.id)}
                        className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Comment List */}
                  <div className="space-y-4">
                    {comments.filter((c) => c.postId === post.id).length === 0 && (
                      <p className="text-muted-foreground text-center py-8">No comments yet. Be the first!</p>
                    )}
                    {comments
                      .filter((c) => c.postId === post.id)
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((c) => (
                        <div key={c.id} className="glass rounded-xl p-5 group/comment">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-semibold text-foreground">{c.name}</span>
                              <span className="text-xs text-muted-foreground ml-3">{new Date(c.date).toLocaleDateString()}</span>
                            </div>
                            <button onClick={() => deleteComment(c.id)} className="opacity-0 group-hover/comment:opacity-100 text-muted-foreground hover:text-destructive transition-all">
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <p className="text-muted-foreground mt-2">{c.text}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
