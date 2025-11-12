const Skills = () => {
  const skills = [
    {
      category: "AI & ML",
      items: ["Python", "Neural Networks", "Linux", "ML Models"],
      description: "Training models that actually learn, unlike some people"
    },
    {
      category: "Photography",
      items: ["Portrait", "Mirrorless", "Composition", "Lighting"],
      description: "Capturing people who are probably judging my camera choice"
    },
    {
      category: "Hardware & Systems",
      items: ["Android Rooting", "OS Customization", "CLI", "Cross-Platform"],
      description: "Bricking phones professionally since forever"
    },
    {
      category: "Audio",
      items: ["24bit/96KHz", "Audiophile", "Percussion Analysis", "Anatomical Ears"],
      description: "Hearing frequencies your AirPods can't even imagine"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          What I do
        </h2>
        <p className="text-muted-foreground text-lg mb-16">
          Or at least what I tell people I do at parties
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group p-8 rounded-sm border border-border hover:border-foreground transition-smooth hover:bg-hover-lift"
            >
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
