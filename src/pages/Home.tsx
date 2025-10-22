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
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Politische Kommunikation
            <br />
            <span className="text-accent">mit Wirkung</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 font-light">
            Professionelle Beratung für politische Institutionen und Politiker im konservativen Spektrum.
            Marketing, Social Media und KI-Expertise für erfolgreiche politische Kommunikation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg">
                Beratung anfragen
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/leistungen">
              <Button variant="outline" size="lg" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Unsere Leistungen
              </Button>
            </Link>
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
                className="p-8 hover:shadow-accent transition-smooth cursor-pointer border-2 hover:border-accent"
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center shadow-elegant border-2 border-accent/20">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für erfolgreiche politische Kommunikation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch und erfahren Sie,
              wie wir Ihre politischen Ziele unterstützen können.
            </p>
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg">
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
