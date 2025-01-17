import * as nodemailer from "nodemailer";
//import Mail from "nodemailer/lib/mailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
//import { config } from "../../../../../config";

// const smtpConfig: SMTPTransport.Options = {
//   host: config.nodeMailerHost,
//   port: parseInt(config.nodeMailerPort, 10),
//   auth: {
//     user: config.nodeMailerUsername,
//     pass: config.nodeMailerPassword,
//   },
// };

// const mailTrap = (): Mail => {
//   const smtpTransport: Mail = nodemailer.createTransport(smtpConfig);

//   return smtpTransport;
// };

// export { mailTrap };

//import * as nodemailer from "nodemailer";
import * as pug from "pug";
import { convert } from "html-to-text";
import path from "path";

import { Mail } from "src/modules/notification/domain/mail";
import { IEmailService } from "../emailService";
import { config } from "../../../../../config";

const options = {
  wordwrap: 130,
};

const smtpConfig: SMTPTransport.Options = {
  host: config.nodeMailerHost,
  port: parseInt(config.nodeMailerPort, 10),
  auth: {
    user: config.nodeMailerUsername,
    pass: config.nodeMailerPassword,
  },
};

export class MailTrapEmailService implements IEmailService {
  constructor() {}

  transport() {
    const smtpTransport = nodemailer.createTransport(smtpConfig);

    return smtpTransport;
  }

  async sendEmail(mail: Mail): Promise<void> {
    // 1) Render HTML based on a pug template
    const filePath = path.join(
      __dirname,
      `../../../../../../public/email-templates/${mail.template}.pug`
    );
    const html = pug.renderFile(filePath, {
      firstName: mail.firstName,
      lastName: mail.lastName,
      url: mail.url,
      email: mail.email,
      subject: mail.subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: "noreply@japahub.com",
      to: mail.email,
      subject: mail.subject,
      html,
      text: convert(html, options),
    };

    // 3) Create a transport and send email
    await this.transport().sendMail(mailOptions);
  }
}
