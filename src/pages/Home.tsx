import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, TrendingUp, Bot } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Marketing-Beratung",
      description: "Strategische Kommunikation und Kampagnenplanung für politische Projekte.",
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      description: "Professionelle Präsenz auf allen relevanten Plattformen mit zielgerichteten Inhalten.",
    },
    {
      icon: Bot,
      title: "KI-Beratung",
      description: "Innovative Lösungen durch künstliche Intelligenz für moderne politische Kommunikation.",
    },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90" />
          <div className="absolute inset-0 gradient-mesh" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Politische Kommunikation
            <br />
            <span className="text-gradient">mit Wirkung</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 font-light animate-fade-in-up delay-100">
            Professionelle Beratung für politische Institutionen und Politiker im konservativen Spektrum.
            Marketing, Social Media und KI-Expertise für erfolgreiche politische Kommunikation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg hover-glow">
                Beratung anfragen
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/leistungen">
              <Button variant="outline" size="lg" className="text-lg glass border-2">
                Unsere Leistungen
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unsere Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Umfassende Beratungsleistungen für erfolgreiche politische Kommunikation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 glass hover:shadow-glow transition-spring cursor-pointer border-2 border-border hover:border-accent group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/leistungen">
              <Button variant="default" size="lg">
                Alle Leistungen entdecken
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warum Scintilla Media?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Mit langjähriger Erfahrung in der politischen Kommunikation bieten wir umfassende
              Dienstleistungen für Institutionen und Politiker im konservativen Spektrum.
              Von strategischer Beratung über Social Media Management bis hin zu innovativen
              KI-gestützten Lösungen – wir sind Ihr Partner für erfolgreiche politische Kommunikation.
            </p>
            <Link to="/ueber-uns">
              <Button variant="default" size="lg">
                Mehr über uns erfahren
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 text-center shadow-xl glass border-2 border-accent/20 hover:border-accent transition-smooth">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für erfolgreiche <span className="text-gradient">politische Kommunikation</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch und erfahren Sie,
              wie wir Ihre politischen Ziele unterstützen können.
            </p>
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg hover-glow">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
