import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">S</span>
              </div>
              <span className="text-xl font-serif font-bold">
                Scintilla Media
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professionelle Beratung für politische Institutionen und Politiker.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/leistungen" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Unsere Leistungen
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/referenzen" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  AGB
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@scintilla-media.de</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+49 (0) 30 1234 5678</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Musterstraße 123<br />10115 Berlin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Scintilla Media UG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
