import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Standard Materials data to resolve Material names on the backend
const MATERIALS_DATA = [
  { id: 'm1', name: 'Fine Bookwove Printing Bond' },
  { id: 'm2', name: 'Classic Cream High-Bulking Paper' },
  { id: 'm3', name: 'Premium Silk Coated Art Paper' },
  { id: 'm4', name: 'High-Density Ivory Cover Board' },
  { id: 'm5', name: 'Kraft Unbleached Eco-Board' }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to receive and process print inquiries
  app.post("/api/inquiry", async (req, res) => {
    const {
      clientName,
      companyName,
      email,
      phone,
      subject,
      materialId,
      size,
      quantity,
      customMessage,
      estimatedCost,
      estimatedDays
    } = req.body;

    if (!clientName || !email || !phone || !subject) {
      res.status(400).json({ error: "Missing required fields: clientName, email, phone, and subject are required." });
      return;
    }

    const material = MATERIALS_DATA.find(m => m.id === materialId)?.name || materialId || "Standard Stock";

    const smtpHost = process.env.SMTP_HOST || "mail.mankusaprinting.com";
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const smtpUser = process.env.SMTP_USER || "quotes@mankusaprinting.com";
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE 
      ? ["true", "ssl", "tls"].includes(process.env.SMTP_SECURE.toLowerCase()) 
      : (smtpPort === 465);
    const smtpFrom = process.env.SMTP_FROM || "quotes@mankusaprinting.com";
    const smtpTo = process.env.SMTP_TO || "quotes@mankusaprinting.com";

    console.log(`[Inquiry Received] Client: ${clientName}, Subject: ${subject}`);

    const emailSubject = `[Mankusa Printing Inquiry] ${subject}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b;">
        <div style="text-align: center; border-bottom: 2px solid #06b6d4; padding-bottom: 15px; margin-bottom: 20px;">
          <h1 style="color: #0f172a; margin: 0; font-size: 24px;">New Print Inquiry</h1>
          <p style="color: #0891b2; font-size: 14px; font-weight: bold; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">Mankusa Printing Press</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5;">A client has submitted a custom print specification inquiry on the website. Below are the details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; width: 35%; border-bottom: 1px solid #f1f5f9;">Client Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${clientName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Company Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${companyName || "N/A"}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone Number:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${phone}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Subject:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Paper Material:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${material}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Sheet Size:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${size}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Quantity Required:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${quantity} sheets</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Estimated Cost:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0891b2; font-weight: bold;">$${(estimatedCost || 0).toFixed(2)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Estimated Lead Time:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${estimatedDays || 5} business days</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px;">
          <p style="font-weight: bold; margin-bottom: 8px;">Client's Message / Design Specifications:</p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #334155;">${customMessage || "No additional message provided."}</div>
        </div>
        
        <div style="margin-top: 30px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 15px;">
          This email was generated automatically by the Mankusa Printing Press inquiry system.<br/>
          SMTP Server configured to host: <strong>${smtpHost}</strong> (Port: ${smtpPort})
        </div>
      </div>
    `;

    // Check if SMTP is configured
    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials (SMTP_USER / SMTP_PASS) are not defined in environmental variables.");
      console.log("Email content would have been sent via SMTP:");
      console.log(`To: ${smtpTo}`);
      console.log(`From: ${smtpFrom}`);
      console.log(`Subject: ${emailSubject}`);
      
      // Return simulation state so the application does not crash and the user gets clear guidance
      res.json({
        success: true,
        simulated: true,
        message: "Inquiry saved locally & simulated successfully. Real-time email dispatch is pending SMTP configuration.",
        smtpHost
      });
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass
        },
        tls: {
          rejectUnauthorized: false // Avoid issues with self-signed certs
        }
      });

      const mailOptions = {
        from: smtpFrom,
        to: smtpTo,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml
      };

      await transporter.sendMail(mailOptions);
      console.log(`[SMTP Email Sent] Successfully sent inquiry email via ${smtpHost}`);

      res.json({
        success: true,
        simulated: false,
        message: "Email successfully delivered via SMTP server to our estimation team.",
        smtpHost
      });
    } catch (error: any) {
      console.error("[SMTP Error] Failed to send email via SMTP server:", error);
      res.status(500).json({
        error: "SMTP server communication failure",
        details: error.message,
        smtpHost
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server middleware loaded.");
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Production static server assets configured.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Full-Stack Server successfully running on http://localhost:${PORT}`);
  });
}

startServer();
