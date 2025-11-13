import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Work", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Photos", path: "/photography" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-mono text-lg font-light text-foreground hover:opacity-60 transition-fast tracking-wide">
            devHari
          </Link>
          
          <div className="flex gap-8 items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
