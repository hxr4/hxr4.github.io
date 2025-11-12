import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-balance">
          Probably overthinking
          <br />
          <span className="text-muted-foreground">your design right now</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Designer, developer, and occasional photographer. Building things that don't need a manual to understand.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="font-medium"
          >
            See the work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="font-medium"
          >
            Let's talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
