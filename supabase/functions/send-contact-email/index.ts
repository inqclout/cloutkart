import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

function buildNotificationEmail(fullName: string, company: string, email: string, website: string, message: string): string {
  const field = (label: string, value: string, isLink = false) => `
    <tr>
      <td style="padding: 0 0 16px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0f1625; border: 1px solid #1e2d4a; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 16px 20px;">
              <p style="margin: 0 0 4px 0; font-family: Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #5b7fa6;">${label}</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 15px; font-weight: 500; color: #e8edf5; line-height: 1.5;">${isLink ? `<a href="${value}" style="color: #22d3ee; text-decoration: none;">${value}</a>` : value}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>New CloutKart Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060b14; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #060b14; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #0a1020; border-radius: 20px; overflow: hidden; border: 1px solid #1a2640;">

          <!-- HEADER BAND -->
          <tr>
            <td style="background: linear-gradient(135deg, #6d1fc4 0%, #2452c8 50%, #0694b0 100%); padding: 32px 40px; text-align: center;">
              <p style="margin: 0 0 8px 0; font-family: Arial, sans-serif; font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">CloutKart</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.65);">AI Creatives That Drive Results</p>
            </td>
          </tr>

          <!-- BADGE -->
          <tr>
            <td style="background-color: #0a1020; padding: 28px 40px 0 40px; text-align: center;">
              <table cellpadding="0" cellspacing="0" border="0" align="center">
                <tr>
                  <td style="background-color: #121d35; border: 1px solid #1e3355; border-radius: 50px; padding: 7px 18px;">
                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #22d3ee;">&#x25cf;&nbsp; New Lead Submission</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO -->
          <tr>
            <td style="background-color: #0a1020; padding: 24px 40px 32px 40px; text-align: center;">
              <p style="margin: 0 0 12px 0; font-family: Arial, sans-serif; font-size: 28px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">New Client Inquiry Received</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 15px; color: #6b88aa; line-height: 1.6;">A new business has contacted CloutKart through the website.</p>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding: 0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="background: linear-gradient(90deg, transparent, #1e3355, transparent); height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- LEAD DETAILS -->
          <tr>
            <td style="background-color: #0a1020; padding: 32px 40px 0 40px;">
              <p style="margin: 0 0 20px 0; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #3b5280;">Inquiry Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${field("Full Name", fullName)}
                ${company ? field("Company", company) : ""}
                ${field("Email Address", `mailto:${email}`, true)}
                ${website ? field("Website", website, true) : ""}
              </table>
            </td>
          </tr>

          <!-- MESSAGE -->
          <tr>
            <td style="background-color: #0a1020; padding: 0 40px 32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px 0; font-family: Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #5b7fa6;">Message</p>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color: #0c1528; border: 1px solid #1a3050; border-left: 3px solid #6d1fc4; border-radius: 12px; padding: 20px 24px;">
                          <p style="margin: 0; font-family: Arial, sans-serif; font-size: 15px; color: #c8d8f0; line-height: 1.8; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding: 0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="background: linear-gradient(90deg, transparent, #1e3355, transparent); height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color: #0a1020; padding: 32px 40px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your CloutKart Inquiry" style="font-family: Arial, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; display: inline-block; background: linear-gradient(135deg, #6d1fc4, #2452c8, #0694b0); border-radius: 50px; padding: 14px 36px;">Reply to Inquiry &rarr;</a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #070d1a; border-top: 1px solid #111e33; padding: 28px 40px; text-align: center; border-radius: 0 0 20px 20px;">
              <p style="margin: 0 0 6px 0; font-family: Arial, sans-serif; font-size: 15px; font-weight: 800; color: #ffffff;">CloutKart</p>
              <p style="margin: 0 0 10px 0; font-family: Arial, sans-serif; font-size: 11px; color: #3b5280; letter-spacing: 0.08em; text-transform: uppercase;">AI-Powered Creative Advertising</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #2a4070;">
                <a href="mailto:inquiry@clout-kart.com" style="color: #2a6090; text-decoration: none;">inquiry@clout-kart.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

function buildAutoReplyEmail(fullName: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>Thanks for contacting CloutKart</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060b14; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #060b14; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #0a1020; border-radius: 20px; overflow: hidden; border: 1px solid #1a2640;">

          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #6d1fc4 0%, #2452c8 50%, #0694b0 100%); padding: 32px 40px; text-align: center;">
              <p style="margin: 0 0 8px 0; font-family: Arial, sans-serif; font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">CloutKart</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.65);">AI Creatives That Drive Results</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 40px 40px 32px 40px;">
              <p style="margin: 0 0 24px 0; font-family: Arial, sans-serif; font-size: 24px; font-weight: 900; color: #ffffff; line-height: 1.3;">
                Thanks for reaching out, ${fullName}.
              </p>
              <p style="margin: 0 0 16px 0; font-family: Arial, sans-serif; font-size: 15px; color: #7a9abd; line-height: 1.8;">
                We've received your inquiry and our team will review it shortly. You can expect to hear from us <strong style="color: #c8d8f0;">within 24 hours.</strong>
              </p>
              <p style="margin: 0 0 32px 0; font-family: Arial, sans-serif; font-size: 15px; color: #7a9abd; line-height: 1.8;">
                In the meantime, feel free to reply to this email with any questions or additional details about your project.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color: #0c1528; border: 1px solid #1a3050; border-left: 3px solid #22d3ee; border-radius: 12px; padding: 20px 24px;">
                    <p style="margin: 0 0 6px 0; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #22d3ee;">What Happens Next</p>
                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #8eaacf; line-height: 1.7;">We'll review your inquiry, research your brand, and come back to you with a tailored strategy. If you qualify for our 3 free creatives offer, we'll let you know right away.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding: 0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="background: linear-gradient(90deg, transparent, #1e3355, transparent); height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- SIGNATURE -->
          <tr>
            <td style="padding: 28px 40px 32px 40px;">
              <p style="margin: 0 0 4px 0; font-family: Arial, sans-serif; font-size: 14px; color: #c8d8f0; font-weight: 600;">— The CloutKart Team</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; color: #3b5280;">
                <a href="mailto:inquiry@clout-kart.com" style="color: #22d3ee; text-decoration: none;">inquiry@clout-kart.com</a>
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #070d1a; border-top: 1px solid #111e33; padding: 24px 40px; text-align: center; border-radius: 0 0 20px 20px;">
              <p style="margin: 0 0 6px 0; font-family: Arial, sans-serif; font-size: 14px; font-weight: 800; color: #ffffff;">CloutKart</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; color: #2a4070; letter-spacing: 0.08em; text-transform: uppercase;">AI-Powered Creative Advertising</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { fullName, company, email, website, message } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ success: true, note: "Email service not configured; data saved to DB." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const plainText = `New CloutKart Inquiry\n\nFull Name: ${fullName}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nWebsite: ${website || "Not provided"}\n\nMessage:\n${message}`;

    // Notification to CloutKart team
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CloutKart Inquiries <inquiry@clout-kart.com>",
        to: ["adhiraj@clout-kart.com", "rounak@clout-kart.com", "inquiry@clout-kart.com"],
        subject: `New Inquiry from ${fullName}${company ? ` (${company})` : ""}`,
        text: plainText,
        html: buildNotificationEmail(fullName, company || "", email, website || "", message),
      }),
    });

    // Auto-reply to submitter
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CloutKart <inquiry@clout-kart.com>",
        to: [email],
        reply_to: "inquiry@clout-kart.com",
        subject: "We received your CloutKart inquiry",
        text: `Hi ${fullName},\n\nThanks for contacting CloutKart. We've received your inquiry and will get back to you within 24 hours.\n\n— The CloutKart Team\ninquiry@clout-kart.com`,
        html: buildAutoReplyEmail(fullName),
      }),
    });

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
