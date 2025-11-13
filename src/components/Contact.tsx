import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com/hxr4/" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/hari456" },
    { icon: Twitter, label: "Twitter", url: "https://x.com/hari_frr" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/hri.fr/" },
  ];

  return (
    <section id="contact" className="py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight relative inline-block">
          <span className="relative z-10">Let's connect</span>
          <span className="absolute inset-0 text-foreground/10 font-['Courier_New'] translate-x-1 translate-y-1 select-none" aria-hidden="true">
            Let's connect
          </span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Open to collaboration on interesting projects
        </p>
        
        <Button
          size="lg"
          className="font-medium mb-12"
          onClick={() => window.location.href = 'mailto:youcallmehari01@gmail.com'}
        >
          <Mail className="mr-2 h-5 w-5" />
          youcallmehari01@gmail.com
        </Button>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-foreground hover:bg-hover-lift transition-smooth hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © 2024 Hari. Engineered with precision.
        </p>
      </div>
    </section>
  );
};

export default Contact;
