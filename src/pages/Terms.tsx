import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Geltungsbereich</h2>
                <p className="leading-relaxed mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
                  Scintilla Media UG (nachfolgend "Auftragnehmer") und ihren Kunden (nachfolgend
                  "Auftraggeber") über Beratungs- und Dienstleistungen im Bereich der politischen
                  Kommunikation, Marketing, Social Media und KI-Beratung.
                </p>
                <p className="leading-relaxed">
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des
                  Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer hat
                  ihrer Geltung ausdrücklich schriftlich zugestimmt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Vertragsschluss</h2>
                <p className="leading-relaxed mb-4">
                  Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern nicht
                  ausdrücklich als verbindlich gekennzeichnet. Ein Vertrag kommt erst durch die
                  schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der
                  Leistungserbringung zustande.
                </p>
                <p className="leading-relaxed">
                  Alle Vereinbarungen bedürfen zu ihrer Wirksamkeit der Schriftform. Dies gilt auch
                  für Änderungen und Ergänzungen dieser AGB.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Leistungsumfang</h2>
                <p className="leading-relaxed mb-4">
                  Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen
                  Leistungsbeschreibung im Angebot bzw. der Auftragsbestätigung. Änderungen des
                  Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
                </p>
                <p className="leading-relaxed">
                  Der Auftragnehmer schuldet die Erbringung der vereinbarten Leistungen nach dem
                  aktuellen Stand der Technik und unter Beachtung der anerkannten fachlichen
                  Standards. Eine Erfolgsgarantie wird nicht übernommen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Mitwirkungspflichten</h2>
                <p className="leading-relaxed mb-4">
                  Der Auftraggeber ist verpflichtet, den Auftragnehmer bei der Durchführung des
                  Auftrages zu unterstützen und alle erforderlichen Informationen, Unterlagen und
                  Zugänge rechtzeitig zur Verfügung zu stellen.
                </p>
                <p className="leading-relaxed">
                  Verzögerungen, die durch unzureichende Mitwirkung des Auftraggebers entstehen,
                  gehen zu Lasten des Auftraggebers und können zu einer Anpassung der vereinbarten
                  Fristen und Vergütungen führen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Vergütung und Zahlung</h2>
                <p className="leading-relaxed mb-4">
                  Die Vergütung richtet sich nach der jeweiligen Vereinbarung. Sofern nicht anders
                  vereinbart, gelten die im Angebot genannten Preise. Alle Preise verstehen sich
                  zuzüglich der jeweils gültigen gesetzlichen Umsatzsteuer.
                </p>
                <p className="leading-relaxed mb-4">
                  Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung
                  fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über
                  dem Basiszinssatz berechnet.
                </p>
                <p className="leading-relaxed">
                  Bei Verträgen mit einer Laufzeit von mehr als drei Monaten kann der Auftragnehmer
                  Abschlagszahlungen entsprechend dem Fortschritt der Leistungserbringung verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Vertraulichkeit</h2>
                <p className="leading-relaxed mb-4">
                  Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung bekannt
                  gewordenen vertraulichen Informationen streng vertraulich zu behandeln und nicht an
                  Dritte weiterzugeben.
                </p>
                <p className="leading-relaxed">
                  Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.
                  Ausgenommen sind Informationen, die nachweislich öffentlich bekannt sind oder
                  gesetzlich offengelegt werden müssen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Urheberrechte und Nutzungsrechte</h2>
                <p className="leading-relaxed mb-4">
                  Alle vom Auftragnehmer erstellten Konzepte, Strategien, Texte, Grafiken und
                  sonstigen Arbeitsergebnisse unterliegen dem Urheberrecht. Der Auftraggeber erhält
                  nach vollständiger Bezahlung ein einfaches, nicht übertragbares Nutzungsrecht für
                  den vereinbarten Verwendungszweck.
                </p>
                <p className="leading-relaxed">
                  Eine weitergehende Nutzung oder Weitergabe an Dritte bedarf der vorherigen
                  schriftlichen Zustimmung des Auftragnehmers und kann mit zusätzlichen Kosten
                  verbunden sein.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Haftung</h2>
                <p className="leading-relaxed mb-4">
                  Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie
                  für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
                </p>
                <p className="leading-relaxed mb-4">
                  Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung
                  wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf den
                  vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p className="leading-relaxed">
                  Die Haftung für mittelbare Schäden und Folgeschäden, die Folge von Mängeln der
                  Leistung sind, ist ausgeschlossen, soweit nicht zwingend gehaftet wird.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Kündigung</h2>
                <p className="leading-relaxed mb-4">
                  Verträge mit festgelegter Laufzeit enden mit Ablauf der vereinbarten Frist.
                  Dauerschuldverhältnisse können von beiden Parteien mit einer Frist von drei Monaten
                  zum Monatsende ordentlich gekündigt werden, sofern nichts anderes vereinbart wurde.
                </p>
                <p className="leading-relaxed">
                  Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Datenschutz</h2>
                <p className="leading-relaxed">
                  Für die Verarbeitung personenbezogener Daten gelten die Bestimmungen der
                  Datenschutz-Grundverordnung (DSGVO) und die Datenschutzerklärung des
                  Auftragnehmers. Weitere Informationen finden Sie unter{" "}
                  <a href="/datenschutz" className="text-accent hover:underline">
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Schlussbestimmungen</h2>
                <p className="leading-relaxed mb-4">
                  Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                  UN-Kaufrechts.
                </p>
                <p className="leading-relaxed mb-4">
                  Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem
                  Vertrag ist Berlin, sofern der Auftraggeber Kaufmann, juristische Person des
                  öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
                <p className="leading-relaxed">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies
                  die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch
                  eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen
                  Bestimmung am nächsten kommt.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Stand: {new Date().toLocaleDateString("de-DE")}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;
