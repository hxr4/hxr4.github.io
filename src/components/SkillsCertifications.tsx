import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Code } from "lucide-react";

const SkillsCertifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"skills" | "certifications">("skills");

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

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "2023",
      description: "Deep learning, neural networks, and supervised learning"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      description: "Advanced Python programming and data analysis"
    },
    {
      title: "Linux System Administration",
      issuer: "Linux Foundation",
      date: "2022",
      description: "System operations and command-line expertise"
    },
    {
      title: "Digital Photography Masterclass",
      issuer: "Professional Photographers Association",
      date: "2022",
      description: "Advanced portrait and composition techniques"
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
          className="text-muted-foreground text-lg mb-12"
        >
          Core competencies and achievements
        </motion.p>
        
        {/* Tab Switcher */}
        <div className="flex gap-4 mb-12 border-b border-border">
          <button
            onClick={() => setActiveTab("skills")}
            className={`flex items-center gap-2 pb-4 px-2 font-medium transition-all ${
              activeTab === "skills"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="w-5 h-5" />
            Skills
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2 pb-4 px-2 font-medium transition-all ${
              activeTab === "certifications"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Award className="w-5 h-5" />
            Certifications
          </button>
        </div>

        {/* Skills View */}
        {activeTab === "skills" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
        )}

        {/* Certifications View */}
        {activeTab === "certifications" && (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-sm border border-border hover:border-foreground transition-smooth hover:bg-hover-lift cursor-default"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-hero-accent transition-colors">
                    {cert.title}
                  </h3>
                  <Award className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  {cert.date}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsCertifications;