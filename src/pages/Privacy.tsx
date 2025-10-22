import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
                <p className="leading-relaxed mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                  Text aufgeführten Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Datenerfassung auf dieser Website</h3>
                <p className="font-semibold mb-2">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </p>
                <p className="leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                  Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
                <p className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</p>
                <p className="leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                  kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="leading-relaxed mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                  durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                  dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                <p className="font-semibold mb-2">Wofür nutzen wir Ihre Daten?</p>
                <p className="leading-relaxed mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                  werden.
                </p>
                <p className="font-semibold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                <p className="leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                  ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                  Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde zu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
                <p className="leading-relaxed mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h3 className="text-xl font-semibold mb-3">Externes Hosting</h3>
                <p className="leading-relaxed">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                  Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                  Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                  Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                  sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
                <p className="leading-relaxed mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="leading-relaxed mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                  können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
                  wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="leading-relaxed">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
                  Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                  der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="leading-relaxed mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="leading-relaxed mb-4">
                  Scintilla Media UG (haftungsbeschränkt)
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin
                </p>
                <p className="leading-relaxed mb-4">
                  Telefon: +49 (0) 30 1234 5678
                  <br />
                  E-Mail: info@scintilla-media.de
                </p>
                <p className="leading-relaxed">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Speicherdauer</h3>
                <p className="leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                  Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                  oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                  sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                  personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
                  Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                  dieser Gründe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </h3>
                <p className="leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                  möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                  Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                  unberührt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h3>
                <p className="leading-relaxed">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                  einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                  Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                  Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                  gerichtlicher Rechtsbehelfe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Recht auf Datenübertragbarkeit</h3>
                <p className="leading-relaxed">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                  Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                  einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                  direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
                  dies nur, soweit es technisch machbar ist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Auskunft, Löschung und Berichtigung</h3>
                <p className="leading-relaxed">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                  unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                  Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                  Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="leading-relaxed">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
                  Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit
                  Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der
                  Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht,
                  die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
                <p className="leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                  beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                  Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
                <p className="leading-relaxed">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                  zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                  für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
                  Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
                  bleiben unberührt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
                  inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
                  Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
                  Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten
                  erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                  Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                  unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                  lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Plugins und Tools</h2>
                <h3 className="text-xl font-semibold mb-3">Google Fonts (lokales Hosting)</h3>
                <p className="leading-relaxed">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
                  Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal
                  installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
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

export default Privacy;
