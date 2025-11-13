import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          Building neural networks
          <br />
          <span className="text-muted-foreground">and breaking bootloaders</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance px-4"
        >
          B.Tech AI/ML student. Python developer. Portrait photographer. CLI enthusiast. Audiophile with anatomical precision.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="font-medium group"
          >
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              View work
            </span>
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="font-medium"
          >
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
