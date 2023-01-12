import { PERMANENT_REDIRECT_STATUS } from 'next/dist/shared/lib/constants';
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;
    let mailConfig;
    if (process.env.NODE_ENV === 'production') {
      // all emails are delivered to destination
      mailConfig = {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      };
    } else {
      // all emails are catched by ethereal.email
      mailConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'selena20@ethereal.email',
          pass: 'CzQXFp5eaYgK17kWSW',
        },
      };
    }
    let mailOptions = {
      from: email,
      to: 'selena20@ethereal.email',
      subject: `${firstName} ${lastName} sent you a message`,
      text: message,
    };
    let transporter = nodemailer.createTransport(mailConfig);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.status(200).json({ message: 'Successfully' });
        console.log('Message sent: %s', info.messageId);
      }
    });
  }
}
