import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Code, Wrench } from "lucide-react";

const SkillsCertifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"skills" | "certifications" | "tools">("skills");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

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

  const tools = {
    proficient: [
      { name: "Python", color: "hsl(207, 90%, 54%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", color: "hsl(210, 100%, 60%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", color: "hsl(210, 100%, 50%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "TypeScript", color: "hsl(207, 90%, 54%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", color: "hsl(13, 78%, 54%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", color: "hsl(207, 90%, 61%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Node.js", color: "hsl(104, 57%, 39%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "React.js", color: "hsl(193, 95%, 68%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Streamlit", color: "hsl(351, 83%, 61%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      { name: "Linux", color: "hsl(48, 100%, 50%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "ADB", color: "hsl(142, 71%, 45%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
    ],
    learning: [
      { name: "MongoDB", color: "hsl(141, 71%, 48%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", color: "hsl(207, 70%, 44%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Next.js", color: "hsl(0, 0%, 100%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", color: "hsl(153, 47%, 49%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Java", color: "hsl(14, 100%, 50%)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ]
  };

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
          <button
            onClick={() => setActiveTab("tools")}
            className={`flex items-center gap-2 pb-4 px-2 font-medium transition-all ${
              activeTab === "tools"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Wrench className="w-5 h-5" />
            Tools
          </button>
        </div>

        {/* Content Container with smooth transitions */}
        <div className="relative min-h-[500px]">
          {/* Skills View */}
          {activeTab === "skills" && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
            </motion.div>
          )}

          {/* Certifications View */}
          {activeTab === "certifications" && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-6 sm:gap-8"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
            </motion.div>
          )}

          {/* Tools View */}
          {activeTab === "tools" && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Proficient Tools */}
              <div>
                <div className="flex flex-wrap gap-8 justify-center">
                  {tools.proficient.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                      className="relative cursor-pointer flex flex-col items-center gap-2"
                    >
                      <motion.div
                        animate={{
                          scale: hoveredTool === tool.name ? 1.3 : 1,
                          y: hoveredTool === tool.name ? -8 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-16 h-16 rounded-sm border border-border transition-all duration-300 flex items-center justify-center"
                        style={{
                          backgroundColor: hoveredTool === tool.name ? 'hsl(var(--card))' : 'transparent',
                          borderColor: hoveredTool === tool.name ? tool.color : 'hsl(var(--border))',
                          boxShadow: hoveredTool === tool.name ? `0 8px 24px ${tool.color}40` : 'none',
                        }}
                      >
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-10 h-10 transition-all duration-300"
                          style={{
                            filter: hoveredTool === tool.name ? 'none' : 'grayscale(100%) brightness(0.7)',
                          }}
                        />
                      </motion.div>
                      <motion.span
                        animate={{
                          color: hoveredTool === tool.name ? tool.color : 'hsl(var(--muted-foreground))',
                          fontWeight: hoveredTool === tool.name ? '600' : '500',
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-sm"
                      >
                        {tool.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Currently Learning */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl font-bold text-center mb-8 tracking-tight"
                >
                  Currently Learning
                </motion.h3>
                <div className="flex flex-wrap gap-8 justify-center">
                  {tools.learning.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                      className="relative cursor-pointer flex flex-col items-center gap-2"
                    >
                      <motion.div
                        animate={{
                          scale: hoveredTool === tool.name ? 1.3 : 1,
                          y: hoveredTool === tool.name ? -8 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-16 h-16 rounded-sm border-2 border-dashed border-border transition-all duration-300 flex items-center justify-center"
                        style={{
                          backgroundColor: hoveredTool === tool.name ? 'hsl(var(--card))' : 'transparent',
                          borderColor: hoveredTool === tool.name ? tool.color : 'hsl(var(--border))',
                          boxShadow: hoveredTool === tool.name ? `0 8px 24px ${tool.color}40` : 'none',
                        }}
                      >
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-10 h-10 transition-all duration-300"
                          style={{
                            filter: hoveredTool === tool.name ? 'none' : 'grayscale(100%) brightness(0.7)',
                          }}
                        />
                      </motion.div>
                      <motion.span
                        animate={{
                          color: hoveredTool === tool.name ? tool.color : 'hsl(var(--muted-foreground))',
                          fontWeight: hoveredTool === tool.name ? '600' : '500',
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-sm"
                      >
                        {tool.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsCertifications;