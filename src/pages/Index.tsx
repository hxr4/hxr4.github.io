import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import SubtleAnimations from "@/components/SubtleAnimations";
import CLIEasterEgg from "@/components/CLIEasterEgg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-mesh relative">
      <AnimatedBackground />
      <SubtleAnimations />
      <CLIEasterEgg />
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
