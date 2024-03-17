import EmailMessage, { TMessage } from "./EmailMessage";
import dotenv from "dotenv";
dotenv.config();

export default class EmailVerification extends EmailMessage {
  protected token!: string;
  protected from: string = process.env.EMAIL_USER as string;
  protected subject: string = "Verify your email";
  protected html: string = "Halo";

  setToken(token: string) {
    this.token = token;
    this.html = html(token);
    return this;
  }

  getMessage(): TMessage {
    if (!this.from || !this.to || !this.subject || !this.html || !this.token) {
      throw new Error("Missing required fields");
    }

    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: this.html,
    };
  }
}

export const html = (token: string) => {
  const url = `${process.env.WEB_URL}/verify/${token}`;

  return `
    <h1>Verify your email</h1>
    <p>Click <a href="${url}">here</a> to verify your email</p>
  `;
};
