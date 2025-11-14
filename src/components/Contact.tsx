import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import MouseParticles from "./MouseParticles";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  
  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com/hxr4/" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/hari456" },
    { icon: Twitter, label: "Twitter", url: "https://x.com/hari_frr" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/hri.fr/" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <MouseParticles />
      
      {/* Owl decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 text-6xl opacity-20 pointer-events-none hidden sm:block"
      >
        🦉
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0, 5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 text-6xl opacity-20 pointer-events-none hidden sm:block"
      >
        🦉
      </motion.div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight flex items-center justify-center gap-3">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🦉
            </motion.span>
            Let's connect
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
            >
              🦉
            </motion.span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12">
            Open to collaboration on interesting projects
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="font-medium mb-8 sm:mb-12 group relative overflow-hidden"
            onClick={() => window.location.href = 'mailto:youcallmehari01@gmail.com'}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-hero-accent/20"
              animate={{
                x: [-100, 300],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <Mail className="mr-2 h-5 w-5 relative z-10" />
            <span className="relative z-10">youcallmehari01@gmail.com</span>
          </Button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoveredSocial(social.label)}
              onMouseLeave={() => setHoveredSocial(null)}
              className="relative p-3 sm:p-4 rounded-full border-2 border-border hover:border-foreground hover:bg-accent transition-all"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
              {hoveredSocial === social.label && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap bg-foreground text-background px-2 py-1 rounded"
                >
                  {social.label}
                </motion.span>
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2024 Hari. Engineered with precision. 🦉
          </p>
          <p className="text-xs text-muted-foreground/60">
            Night owl. Code wizard. Coffee enthusiast.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
