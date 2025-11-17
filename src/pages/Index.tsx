import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsCertifications from "@/components/SkillsCertifications";
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
      <SkillsCertifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
