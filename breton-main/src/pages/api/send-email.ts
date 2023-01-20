import * as sgMail from '@sendgrid/mail';

function formatContactUsEmail({ name, email, phone, message }): string {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Contact Us</title>
    </head>
    <body>
      <h1>Contact Us</h1>
      <p>You have received a message from:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      <p>Message:</p>
      <p>${message}</p>
    </body>
  </html>
  `;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone, message } = req.body;
      // Set your SendGrid API key
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: process.env.EMAIL,
        from: email,
        subject: `${firstName} ${lastName} sent you a message`,

        html: formatContactUsEmail({ name: `${firstName} ${lastName}`, email, phone, message }),
      };

      // Send the email
      await sgMail.send(msg);

      res.status(200).json({ message: 'Successfully' });
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: 'Something goes wrong' });
    }
  }
}
