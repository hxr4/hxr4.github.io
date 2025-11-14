import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import SubtleAnimations from "@/components/SubtleAnimations";
import { motion } from "framer-motion";
import { Clock, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications",
    excerpt: "Exploring modern architecture patterns and best practices for creating applications that grow with your needs.",
    readTime: 8,
    date: "2024-03-15",
    tags: ["Web Development", "Architecture", "React"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    excerpt: "Why writing readable, maintainable code matters more than clever solutions. Lessons learned from real projects.",
    readTime: 6,
    date: "2024-03-10",
    tags: ["Programming", "Best Practices", "Tips"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80"
  },
  {
    id: 3,
    title: "My Journey with Photography",
    excerpt: "How coding and photography intersect - finding beauty in both pixels and code, one frame at a time.",
    readTime: 5,
    date: "2024-03-05",
    tags: ["Photography", "Personal", "Creative"],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
  },
  {
    id: 4,
    title: "Late Night Coding Sessions",
    excerpt: "Why I do my best work when the world sleeps. A night owl's perspective on productivity and creativity.",
    readTime: 4,
    date: "2024-02-28",
    tags: ["Lifestyle", "Productivity", "Personal"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
  },
  {
    id: 5,
    title: "Understanding TypeScript Generics",
    excerpt: "Demystifying one of TypeScript's most powerful features with practical examples and use cases.",
    readTime: 10,
    date: "2024-02-20",
    tags: ["TypeScript", "Tutorial", "Web Development"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80"
  },
  {
    id: 6,
    title: "Coffee, Code, and Contemplation",
    excerpt: "Musings on the development process, finding flow states, and why good coffee matters.",
    readTime: 3,
    date: "2024-02-15",
    tags: ["Personal", "Lifestyle", "Thoughts"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-mesh relative">
      <AnimatedBackground />
      <SubtleAnimations />
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Blog & Thoughts
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              Ideas, experiences, and insights from my journey through code and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer">
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
