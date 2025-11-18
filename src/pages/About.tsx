import Navigation from "@/components/Navigation";
import SubtleAnimations from "@/components/SubtleAnimations";
import { motion } from "framer-motion";
import { Terminal, Cpu, Camera, Headphones, Code2, Zap, Music, Lightbulb, Monitor, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const interests = [
    {
      icon: Terminal,
      title: "CLI Purist",
      desc: "sudo over buttons. Always.",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Code2,
      title: "Python Wizard",
      desc: "Neural nets that actually converge",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Camera,
      title: "Mirrorless Artist",
      desc: "Glass over pixels, always",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Cpu,
      title: "Hardware Surgeon",
      desc: "Root, brick, resurrect, repeat",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Headphones,
      title: "24-bit Ears",
      desc: "Lossy compression? Not here.",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Zap,
      title: "Kernel Tweaker",
      desc: "OS agnostic, bash-fluent",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Music,
      title: "Sound Architect",
      desc: "96kHz minimum standards",
      color: "from-muted to-muted-foreground/20"
    },
    {
      icon: Lightbulb,
      title: "Digital Alchemist",
      desc: "Debugging = necromancy",
      color: "from-muted to-muted-foreground/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark relative custom-cursor-dot">
      <SubtleAnimations />
      
      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed w-3 h-3 bg-foreground rounded-full pointer-events-none z-[60] mix-blend-difference"
        animate={{
          x: cursorPosition.x - 6,
          y: cursorPosition.y - 6,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
      
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-start mb-20"
          >
            {/* Image Section */}
            <div 
              className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.img
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://res.cloudinary.com/di4s4vcah/image/upload/v1763011236/WhatsApp_Image_2025-11-08_at_16.14.36_if2cel.jpg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold tracking-tight"
              >
                Not Your Average
                <span className="block text-hero-accent mt-2">Developer</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6 text-muted-foreground text-lg leading-relaxed"
              >
                <p>
                  AI/ML student who trains neural networks that actually converge. 
                  Python whisperer. CLI purist. Your GUI is cute, but I'll stick to my terminal.
                </p>
                
                <p>
                  Portrait photographer wielding mirrorless glass. Hardware surgeon 
                  who roots, bricks, ROM-swaps, and somehow resurrects devices. 
                  Call it debugging—I call it digital necromancy.
                </p>

                <p>
                  Audiophile with ears tuned to 24-bit/96kHz. Lossy compression? 
                  Not in my library. Fluent in every OS, but <span className="text-hero-accent font-mono">bash</span> speaks 
                  my language best.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-sm bg-gradient-to-br ${interest.color} border border-border/50 backdrop-blur-sm group cursor-pointer`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <interest.icon className="w-6 h-6 mb-3 text-foreground group-hover:scale-110 transition-smooth" />
                <h3 className="text-sm font-semibold mb-1 text-foreground">{interest.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{interest.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gear Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-foreground">Current Setup</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Computing */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-sm border border-border hover:border-foreground transition-all bg-background/30 backdrop-blur-sm"
              >
                <Monitor className="w-8 h-8 mb-3 text-hero-accent" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">Computing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• MacBook Air M4</li>
                  <li>• Dell Inspiron 15 (Ryzen 5 7350u)</li>
                </ul>
              </motion.div>

              {/* Mobile */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-sm border border-border hover:border-foreground transition-all bg-background/30 backdrop-blur-sm"
              >
                <Smartphone className="w-8 h-8 mb-3 text-hero-accent" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">Mobile</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Samsung Galaxy S23 Ultra</li>
                </ul>
              </motion.div>

              {/* Camera */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-sm border border-border hover:border-foreground transition-all bg-background/30 backdrop-blur-sm"
              >
                <Camera className="w-8 h-8 mb-3 text-hero-accent" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">Camera</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sony A7M4</li>
                  <li className="ml-4">— 85mm f/1.4 Sigma DGDN</li>
                  <li className="ml-4">— 70-200mm f/2.0-f/11 Sony</li>
                  <li className="ml-4">— 135mm f/1.8-f/2.8 Sigma ProArt</li>
                </ul>
              </motion.div>

              {/* Audio */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-sm border border-border hover:border-foreground transition-all bg-background/30 backdrop-blur-sm sm:col-span-2 lg:col-span-3"
              >
                <Headphones className="w-8 h-8 mb-3 text-hero-accent" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">Audio Arsenal</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• OnePlus Nord Buds 3 Pro</li>
                    <li>• OnePlus Buds Pro 3</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sony CH720N</li>
                    <li>• KZ Vader Pro IEM (3DD Tuning)</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Headphonezone Hi-res DAC</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">24/96</div>
              <div className="text-sm text-muted-foreground">Audio Standard</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Linux Distros Tried</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">CLI Preference</div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
