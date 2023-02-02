const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const message = {
    from: req.body.fullName,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `Interested Person on Website`,
    html: ` <h3>Person Name: ${req.body.fullName}</h3>
    <h3>Person Address: ${req.body.address}</h3>

    <h3>Person Contact Number: ${req.body.contactNumber}</h3>

    <h3>Interested Country: ${req.body.country}</h3>

    <h3> Interested Visa Type: ${req.body.type}</h3>

    <h3>Visiting Date ${req.body.date}</h3>

    `,
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
