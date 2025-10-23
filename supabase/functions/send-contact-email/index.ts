import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission from:", email);

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, E-Mail und Nachricht sind erforderlich" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Scintilla Media <kontakt@scintilla-media.de>",
      to: [email],
      subject: "Ihre Kontaktanfrage bei Scintilla Media",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0066ff;">Vielen Dank für Ihre Anfrage</h1>
          <p>Hallo ${name},</p>
          <p>wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0;">Ihre Nachricht:</h3>
            ${subject ? `<p><strong>Betreff:</strong> ${subject}</p>` : ''}
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>Mit freundlichen Grüßen,<br>Ihr Scintilla Media Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #666;">
            Scintilla Media UG<br>
            Pappelallee 78-79<br>
            10437 Berlin<br>
            Deutschland
          </p>
        </div>
      `,
    });

    if (userEmailResponse?.error) {
      console.error('Resend user email error:', userEmailResponse.error);
      return new Response(
        JSON.stringify({ error: userEmailResponse.error.message, code: userEmailResponse.error.name }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to company
    const notificationEmailResponse = await resend.emails.send({
      from: "Kontaktformular <kontakt@scintilla-media.de>",
      to: ["mh@scintilla-media.de"],
      reply_to: email,
      subject: `Neue Kontaktanfrage: ${subject || 'Keine Betreffzeile'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0066ff;">Neue Kontaktanfrage</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Betreff:</strong> ${subject}</p>` : ''}
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            
            <h3>Nachricht:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="font-size: 12px; color: #666;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf scintilla-media.de generiert.
          </p>
        </div>
      `,
    });

    if (notificationEmailResponse?.error) {
      console.error('Resend notification email error:', notificationEmailResponse.error);
      return new Response(
        JSON.stringify({ error: notificationEmailResponse.error.message, code: notificationEmailResponse.error.name }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Notification email sent to company:", notificationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "E-Mails erfolgreich versendet"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Fehler beim Versenden der E-Mail. Bitte versuchen Sie es später erneut.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
