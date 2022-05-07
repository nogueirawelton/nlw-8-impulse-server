import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb60d9d25b055f",
    pass: "03303976e297a0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <contact@feedget.com>',
      to: 'Welton Nogueira <welton.nogueira.dev@gmail.com>',
      subject,
      html: body,
    });
  }
}