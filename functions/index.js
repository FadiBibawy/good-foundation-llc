/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
// const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const cors = require("cors")();


const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const clientId = functions.config().oauth.client_id;
// const clientSecret = functions.config().oauth.client_secret;
// const redirectUri = functions.config().oauth.redirect_uri;

// Create an OAuth2 client
// const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

// OAuth Callback function
// exports.oauthCallback = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     try {
//       const { code } = req.query;

//       // Exchange the authorization code for tokens
//       const { tokens } = await oAuth2Client.getToken(code);

//       // Set the OAuth2 credentials in the client
//       oAuth2Client.setCredentials(tokens);

//       res.status(200).send("Authentication successful!");
//     } catch (error) {
//       console.error("OAuth Callback Error:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });

// Send Email function
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const { name, email, phone, message } = req.body;
      console.log("Received data:", { name, email, phone, message });

      // Ensure all required fields are present
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Bad Request: Missing required fields" });
      }

      // Create a transport using the Gmail API OAuth2 credentials
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "login",
          user: gmailEmail,
          pass: gmailPassword,
          clientId: clientId,
          // clientSecret: clientSecret,
          // refreshToken: oAuth2Client.credentials.refresh_token,
          // accessToken: oAuth2Client.credentials.access_token,
        },
      });

      const mailOptions = {
        from: gmailEmail,
        to: "contact@goodfoundation.us",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };

      // Send mail using the transport
      await transport.sendMail(mailOptions);

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email." });
    }
  });
});
