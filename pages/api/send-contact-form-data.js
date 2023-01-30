const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const message = {
    from: req.body.fullName,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `call ${req.body.fullName}`,
    text: req.body.contactNumber,
    html: `<h1>${req.body.contactNumber}</h1>`,
  };

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
