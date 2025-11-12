import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Neural Network Research",
      description: "Advanced deep learning models for computer vision applications",
      tags: ["Python", "TensorFlow", "Research"],
      year: "2024"
    },
    {
      title: "Portrait Series",
      description: "Professional portraiture with technical and artistic focus",
      tags: ["Mirrorless", "Portrait", "Editorial"],
      year: "2024"
    },
    {
      title: "Custom ROM Development",
      description: "Android system modification and kernel optimization",
      tags: ["Android", "Linux", "Rooting"],
      year: "2023"
    },
    {
      title: "ML Model Pipeline",
      description: "Automated machine learning workflow and deployment system",
      tags: ["Python", "ML", "CLI"],
      year: "2024"
    },
    {
      title: "Audio Analysis Tool",
      description: "High-resolution frequency analysis and visualization",
      tags: ["Python", "Audio", "Data Viz"],
      year: "2023"
    },
    {
      title: "System Administration",
      description: "Cross-platform server management and automation",
      tags: ["Linux", "Mac", "CLI"],
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Selected work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg mb-16"
        >
          Recent projects and technical contributions
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer p-8 bg-card border border-border rounded-sm hover:border-foreground transition-smooth hover:bg-hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:translate-x-1 transition-smooth">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground font-medium">
                  {project.year}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
