import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "AI & ML",
      items: ["Python", "Neural Networks", "Linux", "ML Models"],
      description: "Deep learning research and model optimization"
    },
    {
      category: "Photography",
      items: ["Portrait", "Mirrorless", "Composition", "Lighting"],
      description: "Serious portraiture with technical precision"
    },
    {
      category: "Hardware & Systems",
      items: ["Android Rooting", "OS Customization", "CLI", "Cross-Platform"],
      description: "System-level modifications and cross-platform expertise"
    },
    {
      category: "Audio",
      items: ["24bit/96KHz", "Audiophile", "Percussion Analysis", "Anatomical Ears"],
      description: "High-fidelity audio engineering and analysis"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Expertise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg mb-16"
        >
          Core competencies and technical skills
        </motion.p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-8 rounded-sm border border-border hover:border-foreground transition-smooth hover:bg-hover-lift cursor-default"
            >
              <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-hero-accent transition-colors">
                {skill.category}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 italic">
                {skill.description}
              </p>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-fast"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
