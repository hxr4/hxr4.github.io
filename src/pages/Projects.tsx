import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Neural Network Research",
      description: "Custom CNN architecture for image classification. 94% accuracy on test data. Because pre-trained models are too mainstream.",
      tech: ["Python", "TensorFlow", "NumPy"],
      github: "#",
      year: "2024"
    },
    {
      title: "Portrait Series",
      description: "50+ serious portrait shots. RAW processing pipeline in Lightroom. Shot on Sony mirrorless because pixels matter.",
      tech: ["Sony A7", "Lightroom", "35mm/85mm"],
      link: "/photography",
      year: "2023-24"
    },
    {
      title: "Custom ROM Build",
      description: "LineageOS fork with custom kernel tweaks. Overclocked, undervolted, and somehow stable. Your stock ROM could never.",
      tech: ["Android", "Kernel", "ADB"],
      year: "2023"
    },
    {
      title: "ML Model Pipeline",
      description: "End-to-end ML workflow automation. Data preprocessing, training, and deployment. All via CLI because GUIs slow me down.",
      tech: ["Python", "scikit-learn", "Docker"],
      github: "#",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Selected Projects
            </h1>
            <p className="text-muted-foreground text-lg">
              Quality over quantity. Built with precision, no shortcuts.
            </p>
          </motion.div>

          <div ref={ref} className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-sm bg-gradient-accent border border-border/50 hover:border-hero-accent/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-hero-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-mono">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-background/50 rounded-sm border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-sm border border-border hover:border-hero-accent hover:bg-hero-accent/10 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-2 rounded-sm border border-border hover:border-hero-accent hover:bg-hero-accent/10 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm">
              More projects brewing in localhost. Watch this space.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
