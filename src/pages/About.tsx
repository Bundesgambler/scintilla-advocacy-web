import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Shield, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Zielorientiert",
      description:
        "Wir arbeiten ergebnisorientiert und setzen Ihre politischen Kommunikationsziele erfolgreich um.",
    },
    {
      icon: Users,
      title: "Partnerschaftlich",
      description:
        "Vertrauen und langfristige Partnerschaften sind die Basis unserer Zusammenarbeit.",
    },
    {
      icon: Lightbulb,
      title: "Innovativ",
      description:
        "Wir nutzen modernste Technologien und Methoden für Ihre politische Kommunikation.",
    },
    {
      icon: Shield,
      title: "Diskret",
      description:
        "Vertraulichkeit und Diskretion sind selbstverständliche Grundlagen unserer Arbeit.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Über uns</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Ihr Partner für professionelle politische Kommunikation
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-elegant">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wer wir sind
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Scintilla Media UG ist ein spezialisiertes Beratungsunternehmen für politische
                  Institutionen und Politiker im konservativen Spektrum. Mit langjähriger Erfahrung
                  in der politischen Kommunikation bieten wir umfassende Dienstleistungen in den
                  Bereichen Marketing, Social Media und KI-gestützte Beratung.
                </p>
                <p>
                  Unser Team besteht aus erfahrenen Kommunikationsexperten, Strategen und
                  Technologie-Spezialisten, die gemeinsam innovative Lösungen für moderne
                  politische Herausforderungen entwickeln. Wir verstehen die besonderen Anforderungen
                  politischer Kommunikation und bieten maßgeschneiderte Strategien für nachhaltige Erfolge.
                </p>
                <p>
                  Bei Scintilla Media verbinden wir bewährte Kommunikationsstrategien mit modernsten
                  digitalen Technologien. Unser Ziel ist es, politische Botschaften wirkungsvoll zu
                  vermitteln und unsere Mandanten in ihrer politischen Arbeit optimal zu unterstützen.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-accent transition-smooth border-2 hover:border-accent bg-background"
              >
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-elegant border-2 border-accent/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Expertise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">
                    Politische Kommunikation
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mit über 15 Jahren Erfahrung in der politischen Kommunikation verstehen wir
                    die Dynamik des politischen Diskurses und die Anforderungen erfolgreicher
                    Kampagnen.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">
                    Digitale Innovation
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Wir setzen auf modernste Technologien wie KI-gestützte Analysen und
                    datengetriebene Strategien, um optimale Ergebnisse zu erzielen.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">
                    Maßgeschneiderte Lösungen
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Jeder Mandant erhält individuelle Beratung und Strategien, die exakt auf
                    seine spezifischen Bedürfnisse und Ziele zugeschnitten sind.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Lernen Sie uns kennen</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie mehr über
              unsere Arbeitsweise und wie wir Sie unterstützen können.
            </p>
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg">
                Kontakt aufnehmen
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
