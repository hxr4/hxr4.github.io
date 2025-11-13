import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Terminal, Cpu, Camera, Headphones } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer">
              <img
                src="https://res.cloudinary.com/di4s4vcah/image/upload/v1763011236/WhatsApp_Image_2025-11-08_at_16.14.36_if2cel.jpg"
                alt="Portrait"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold tracking-tight cursor-default hover:text-hero-accent transition-colors duration-300"
              >
                More Than Just Code
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4 text-muted-foreground text-lg leading-relaxed"
              >
                <p className="hover:text-foreground transition-colors cursor-default">
                  AI/ML student by day, Python whisperer by night. I train neural networks 
                  that actually converge and prefer <span className="text-hero-accent font-mono">sudo</span> over 
                  buttons. Your GUI is cute, but I'll stick to my terminal.
                </p>
                
                <p className="hover:text-foreground transition-colors cursor-default">
                  Portrait photographer wielding mirrorless glass like a weapon. Hardware surgeon 
                  who roots, bricks, ROM-swaps, and miraculously resurrects phones. 
                  It's not debugging—it's digital necromancy.
                </p>

                <p className="hover:text-foreground transition-colors cursor-default">
                  Audiophile with ears engineered for perfection: 24-bit/96kHz minimum, 
                  because lossy compression is for the weak. Fluent in every OS dialect, 
                  but <span className="text-hero-accent font-mono">bash</span> speaks my language best.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-3 p-4 rounded-sm bg-gradient-accent">
                    <Terminal className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium">CLI Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-sm bg-gradient-accent">
                    <Cpu className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium">Hardware Geek</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-sm bg-gradient-accent">
                    <Camera className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium">Portrait Artist</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-sm bg-gradient-accent">
                    <Headphones className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium">Audiophile</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
