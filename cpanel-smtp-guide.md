# Mankusa Printing Press — cPanel SMTP & Environment Configuration Guide

This guide describes how to configure the SMTP email settings inside cPanel so your Node.js backend can successfully send customer inquiries to `quotes@mankusaprinting.com`.

---

## Part 1: Retrieve or Create SMTP Credentials in cPanel

To send email via your cPanel mail server (`mail.mankusaprinting.com`), you need an active email account. Follow these steps:

1. **Log in** to your cPanel dashboard.
2. Search for or select **Email Accounts** under the *Email* section.
3. Look for your email address: `quotes@mankusaprinting.com`.
   - *If it doesn't exist:* Click **+ Create**, set the username to `quotes` and generate a secure password.
4. On the row for `quotes@mankusaprinting.com`, click the **Connect Devices** button.
5. Under the **Secure SSL/TLS Settings (Recommended)** box, note down the following standard details:
   - **Username:** `quotes@mankusaprinting.com`
   - **Incoming/Outgoing Server:** `mail.mankusaprinting.com` (or `mankusaprinting.com`)
   - **SMTP Port:** `465` (SSL/TLS) or `587` (STARTTLS)

---

## Part 2: Injecting SMTP Configurations on cPanel Node.js App

cPanel runs Node.js applications using Phusion Passenger (managed via the **"Setup Node.js App"** interface). There are two standard ways to inject your credentials into the server.

### Option A: Using cPanel GUI Environment Variables (Highly Recommended)
Phusion Passenger does not read custom `.env` files automatically in some server configurations. Specifying them through cPanel's graphical interface is the most secure and reliable method:

1. Log in to cPanel and open **Setup Node.js App**.
2. Click the **Edit Pencil Icon** on your active Node.js application.
3. Scroll down to the **Environment variables** section.
4. Click **+ Add Variable** and enter the following keys and values one by one:
   
   | Name | Value | Description |
   | :--- | :--- | :--- |
   | `SMTP_HOST` | `mail.mankusaprinting.com` | Mail server domain |
   | `SMTP_PORT` | `465` | SSL SMTP port (recommended) |
   | `SMTP_USER` | `quotes@mankusaprinting.com` | The authenticated sender address |
   | `SMTP_PASS` | *[Your cPanel Email Password]* | The password for quotes@mankusaprinting.com |
   | `SMTP_SECURE` | `true` | Tells Nodemailer to connect using direct SSL |
   | `SMTP_FROM` | `quotes@mankusaprinting.com` | The "From:" header address |
   | `SMTP_TO` | `quotes@mankusaprinting.com` | Receives copy of incoming customer submissions |

5. Click **Save** at the bottom of the variables list.
6. Click **Restart** at the top of the app interface to load the new settings.

---

### Option B: Using a `.env` File
If your server is configured to parse `.env` files using packages like `dotenv` or runs in a custom Node/VPS environment, create a file named `.env` in the root folder of your Node.js application using the cPanel **File Manager**:

```env
# Mail SMTP Host
SMTP_HOST="mail.mankusaprinting.com"
SMTP_PORT=465
SMTP_USER="quotes@mankusaprinting.com"
SMTP_PASS="YOUR_CPANEL_EMAIL_PASSWORD_HERE"
SMTP_SECURE="true"
SMTP_FROM="quotes@mankusaprinting.com"
SMTP_TO="quotes@mankusaprinting.com"
```

*Note: Replace `YOUR_CPANEL_EMAIL_PASSWORD_HERE` with the actual mailbox password configured during Step 1.*

---

## Part 3: Troubleshooting cPanel SMTP Blocks

If you get errors like `Timeout` or `Greeting never received`, check the following typical cPanel configurations:

1. **Restrict Outgoing SMTP (CSF Firewall)**
   - Many cPanel servers have the CSF firewall option `SMTP_BLOCK` turned **ON** by default to prevent spamming. This blocks scripts from making external connections on ports 465, 587, and 25.
   - **Fix:** If the app is hosted on the same server as the mail service, configure it to connect to `127.0.0.1` or `localhost` instead of the external IP, or ask your server administrator to add your system user to the `SMTP_ALLOWUSER` list in `/etc/csf/csf.conf`.

2. **Self-Signed SSL Certificates**
   - If your mail server uses a self-signed or Let's Encrypt certificate that isn't fully trusted by the server's Node.js root authority, the connection might fail.
   - **Fix:** Our code automatically includes the secure bypass setting `tls: { rejectUnauthorized: false }`. This ensures mail is delivered securely without failing on self-signed certificate handshakes.

3. **Mail Exchanger (Routing)**
   - Under cPanel, navigate to **Email Routing**.
   - Make sure your domain is set to **Local Mail Exchanger** if the cPanel server handles your email box.
