const Skills = () => {
  const skills = [
    {
      category: "Design",
      items: ["UI/UX", "Branding", "Typography", "Prototyping"],
      description: "Making pixels cooperate since 2018"
    },
    {
      category: "Development",
      items: ["React", "TypeScript", "Node.js", "Tailwind"],
      description: "Turning coffee into code, responsibly"
    },
    {
      category: "Photography",
      items: ["Portrait", "Street", "Product", "Editorial"],
      description: "Capturing moments before they ghost me"
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
        
        <div className="grid md:grid-cols-3 gap-8">
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
