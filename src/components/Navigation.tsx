import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Startseite", path: "/" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Über uns", path: "/ueber-uns" },
    { name: "Referenzen", path: "/referenzen" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">S</span>
            </div>
            <span className="text-xl font-serif font-bold text-primary">
              Scintilla Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  size="sm"
                  className="font-medium"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="w-full justify-start font-medium"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
