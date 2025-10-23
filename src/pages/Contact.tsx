import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle erforderlichen Felder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Fehler",
          description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 shadow-elegant">
                <Mail className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">E-Mail</h3>
                <a
                  href="mailto:mh@scintilla-media.de"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  mh@scintilla-media.de
                </a>
              </Card>

              <Card className="p-6 shadow-elegant">
                <MapPin className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  Scintilla Media UG
                  <br />
                  Pappelallee 78-79
                  <br />
                  10437 Berlin
                  <br />
                  Deutschland
                </p>
              </Card>

              <Card className="p-6 shadow-elegant border-2 border-accent/20">
                <h3 className="text-xl font-bold mb-3">Kontakt</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-sm">
                    Kontaktieren Sie uns per E-Mail für eine schnelle Antwort auf Ihre Anfrage.
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10 shadow-elegant">
                <h2 className="text-3xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ihr Name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-Mail <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ihre@email.de"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 (0) 30 1234 5678"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Ihr Anliegen"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Nachricht <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-accent">*</span> Pflichtfelder
                    </p>
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full md:w-auto text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          Wird gesendet...
                          <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Nachricht senden
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    Mit dem Absenden dieses Formulars stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
