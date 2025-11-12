const Projects = () => {
  const projects = [
    {
      title: "Neural Network Research",
      description: "Teaching machines to think while I barely function",
      tags: ["Python", "TensorFlow", "Research"],
      year: "2024"
    },
    {
      title: "Portrait Series",
      description: "People in focus, their life choices questionable",
      tags: ["Mirrorless", "Portrait", "Editorial"],
      year: "2024"
    },
    {
      title: "Custom ROM Development",
      description: "Unbricking phones others have given up on",
      tags: ["Android", "Linux", "Rooting"],
      year: "2023"
    },
    {
      title: "ML Model Pipeline",
      description: "Automating the boring stuff so I can break things faster",
      tags: ["Python", "ML", "CLI"],
      year: "2024"
    },
    {
      title: "Audio Analysis Tool",
      description: "Visualizing what your ears can't comprehend",
      tags: ["Python", "Audio", "Data Viz"],
      year: "2023"
    },
    {
      title: "System Administration",
      description: "Managing servers across OS that actually matter",
      tags: ["Linux", "Mac", "CLI"],
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Selected work
        </h2>
        <p className="text-muted-foreground text-lg mb-16">
          Projects I won't be embarrassed about in 6 months (hopefully)
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
