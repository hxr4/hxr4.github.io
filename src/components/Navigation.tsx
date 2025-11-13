import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = [
    { name: "Work", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Photos", path: "/photography" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-mono text-base sm:text-lg font-light text-foreground hover:opacity-60 transition-fast tracking-wide">
            devHari
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-fast hover:text-foreground",
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://open.spotify.com/user/31cms34hx7swbmxgc27cxzt53ue4?si=2065f16b9e054bfa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-hero-accent transition-fast"
            >
              Spotify
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded transition-fast"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-sm font-medium tracking-wide transition-fast hover:text-foreground py-2",
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://open.spotify.com/user/31cms34hx7swbmxgc27cxzt53ue4?si=2065f16b9e054bfa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium tracking-wide text-muted-foreground hover:text-hero-accent transition-fast py-2"
            >
              Spotify
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
