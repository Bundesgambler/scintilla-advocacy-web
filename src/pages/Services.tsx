import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  MessageSquare,
  Bot,
  Target,
  BarChart3,
  Users,
  Video,
  FileText,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: TrendingUp,
      title: "Marketing-Beratung",
      description:
        "Strategische Kommunikation und Kampagnenplanung für politische Projekte. Wir entwickeln maßgeschneiderte Marketingstrategien, die Ihre politischen Botschaften zielgenau vermitteln.",
      features: [
        "Strategieentwicklung und Kampagnenplanung",
        "Zielgruppenanalyse und -ansprache",
        "Botschaftsentwicklung und Messaging",
        "Wettbewerbsanalyse",
      ],
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description:
        "Professionelle Präsenz auf allen relevanten Plattformen mit zielgerichteten Inhalten. Von der Strategie bis zur täglichen Betreuung Ihrer Kanäle.",
      features: [
        "Content-Strategie und -Planung",
        "Community Management",
        "Social Media Advertising",
        "Monitoring und Reporting",
      ],
    },
    {
      icon: Bot,
      title: "KI-gestützte Beratung",
      description:
        "Innovative Lösungen durch künstliche Intelligenz für moderne politische Kommunikation. Nutzen Sie die neuesten Technologien für Ihren Erfolg.",
      features: [
        "Künstliche Intelligenz in der Öffentlichkeitsarbeit",
        "Individuelle Einrichtung von KI Apps",
        "Automatisierte Content-Optimierung",
        "KI-gestützte Zielgruppenanalyse",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Target,
      title: "Kampagnenmanagement",
      description: "Professionelle Planung und Durchführung politischer Kampagnen.",
    },
    {
      icon: BarChart3,
      title: "Datenanalyse & Reporting",
      description: "Umfassende Analysen und aussagekräftige Reports für datengestützte Entscheidungen.",
    },
    {
      icon: Users,
      title: "Öffentlichkeitsarbeit",
      description: "Strategische PR und Medienarbeit für politische Akteure.",
    },
    {
      icon: Video,
      title: "Multimedia-Produktion",
      description: "Professionelle Video- und Grafikproduktion für digitale Kampagnen.",
    },
    {
      icon: FileText,
      title: "Content-Erstellung",
      description: "Hochwertige Texte, Reden und Positionspapiere.",
    },
    {
      icon: Megaphone,
      title: "Krisenkommunikation",
      description: "Schnelle Reaktion und professionelles Management in kritischen Situationen.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Umfassende Beratungsleistungen für erfolgreiche politische Kommunikation
            im digitalen Zeitalter.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="p-8 md:p-12 glass shadow-elegant hover:shadow-glow transition-spring border-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring shadow-accent">
                      <service.icon className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-gradient transition-smooth">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <ArrowRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-smooth" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Weitere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 glass hover:shadow-glow transition-spring cursor-pointer border-2 border-border hover:border-accent bg-background group"
              >
                <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center shadow-elegant border-2 border-accent/20">
            <h2 className="text-4xl font-bold mb-6">Interesse geweckt?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch und erfahren Sie,
              wie wir Ihre politischen Kommunikationsziele erreichen können.
            </p>
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg">
                Beratungsgespräch vereinbaren
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
