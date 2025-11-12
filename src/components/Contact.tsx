import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/yourusername" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Let's work together
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Unless you want a logo for $50. Then let's not.
        </p>
        
        <Button
          size="lg"
          className="font-medium mb-12"
          onClick={() => window.location.href = 'mailto:your.email@example.com'}
        >
          <Mail className="mr-2 h-5 w-5" />
          your.email@example.com
        </Button>

        <div className="flex justify-center gap-6 mb-16">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-foreground hover:bg-hover-lift transition-smooth"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © 2024 Your Name. Built with an unreasonable attention to detail.
        </p>
      </div>
    </section>
  );
};

export default Contact;
