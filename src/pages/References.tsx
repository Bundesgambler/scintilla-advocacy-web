import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, ArrowRight, Award } from "lucide-react";

const References = () => {
  const testimonials = [
    {
      quote:
        "Die Zusammenarbeit mit Scintilla Media hat unsere Kommunikationsstrategie auf ein neues Level gehoben. Professionell, diskret und äußerst effektiv.",
      author: "Dr. Michael Schmidt",
      position: "Mitglied des Landtags",
    },
    {
      quote:
        "Besonders beeindruckt hat uns die KI-gestützte Zielgruppenanalyse. Dadurch konnten wir unsere Botschaften deutlich zielgerichteter platzieren.",
      author: "Claudia Weber",
      position: "Kommunalpolitikerin",
    },
    {
      quote:
        "Scintilla Media versteht die besonderen Anforderungen politischer Kommunikation. Die Beratung war maßgeschneidert und hat exakt unsere Bedürfnisse getroffen.",
      author: "Thomas Müller",
      position: "Politischer Berater",
    },
  ];

  const projects = [
    {
      title: "Landtagswahlkampf 2023",
      description:
        "Umfassende Kampagnenstrategie mit Social Media Management und datengetriebener Zielgruppenansprache.",
      results: [
        "Reichweitensteigerung um 300%",
        "Engagement-Rate um 250% erhöht",
        "Erfolgreicher Wahlausgang",
      ],
    },
    {
      title: "Kommunikationsstrategie Bundestagsabgeordneter",
      description:
        "Entwicklung einer ganzheitlichen Kommunikationsstrategie mit Fokus auf digitale Kanäle und Bürgerdialog.",
      results: [
        "Aufbau einer starken Online-Präsenz",
        "Verdopplung der Follower-Zahlen",
        "Erhöhte Sichtbarkeit in der Region",
      ],
    },
    {
      title: "Krisenkommunikation für Parteiverband",
      description:
        "Schnelle und professionelle Reaktion in einer kritischen Situation mit strategischer Medienarbeit.",
      results: [
        "Erfolgreiche Schadensbegrenzung",
        "Positive Medienberichterstattung",
        "Wiederherstellung des Vertrauens",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Referenzen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Erfolgsgeschichten unserer Mandanten und Projekte
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Was unsere Mandanten sagen</h2>
            <p className="text-xl text-muted-foreground">
              Feedback von politischen Akteuren, die wir erfolgreich begleiten durften
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 shadow-elegant hover:shadow-accent transition-smooth border-2"
              >
                <Quote className="h-10 w-10 text-accent mb-4" />
                <p className="text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Erfolgreiche Projekte</h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 md:p-10 shadow-elegant border-2 hover:border-accent transition-smooth bg-background"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-accent mb-3">Ergebnisse:</p>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto text-center border-2 border-accent/20">
            <h2 className="text-3xl font-bold mb-6">Diskretion und Vertraulichkeit</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aus Gründen der Vertraulichkeit können wir nicht alle unsere Projekte und Mandanten
              öffentlich nennen. Die gezeigten Referenzen repräsentieren einen Ausschnitt unserer
              Arbeit. Gerne stellen wir Ihnen in einem persönlichen Gespräch weitere Beispiele
              und detaillierte Case Studies vor.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam an Ihrem Erfolg arbeiten. Kontaktieren Sie uns für
              ein unverbindliches Erstgespräch.
            </p>
            <Link to="/kontakt">
              <Button variant="accent" size="lg" className="text-lg">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;
