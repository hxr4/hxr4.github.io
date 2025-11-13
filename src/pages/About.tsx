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
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://res.cloudinary.com/di4s4vcah/image/upload/v1762967487/DSC00423_eaahf0.jpg"
                alt="Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold tracking-tight"
              >
                About Me
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4 text-muted-foreground text-lg leading-relaxed"
              >
                <p>
                  BTech student pursuing Artificial Intelligence and Machine Learning,
                  but don't let the "student" title fool you. I speak Python fluently,
                  train neural networks that actually learn, and prefer CLI over your fancy GUIs.
                </p>
                
                <p>
                  When I'm not building ML models, I'm behind a mirrorless camera capturing
                  serious portraits, or knee-deep in hardware — rooting phones, bricking them
                  (professionally), changing ROMs, and somehow unbricking them too.
                </p>

                <p>
                  I'm an audiophile with anatomical ears that dissect every percussion,
                  listening in 24-bit/96kHz because compressed audio is for the weak.
                  Fluent in all OS flavors: macOS, Linux, Windows, Android, iOS —
                  though Linux terminal remains the superior choice.
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
