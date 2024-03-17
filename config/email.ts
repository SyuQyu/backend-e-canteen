import { TransportOptions } from "nodemailer";

export type TDataTransport = {
  host: String;
  port: Number;
  secure?: Boolean;
  auth: {
    user: String;
    pass: String;
  };
} & TransportOptions;

export const dataTransport: TDataTransport = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "user",
    pass: "pass",
  },
};
