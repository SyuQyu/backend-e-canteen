import nodemailer from "nodemailer";
import { dataTransport, TDataTransport } from "../../config/email";
import EmailMessage from "./templates/EmailMessage";

export default class Email {
  transport = nodemailer.createTransport(dataTransport);

  setTransport(dataTransport: TDataTransport) {
    this.transport = nodemailer.createTransport(dataTransport);
  }

  send(emailMessage: EmailMessage) {
    this.transport.sendMail(emailMessage.getMessage());
  }
}
