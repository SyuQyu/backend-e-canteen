export type TMessage = {
  from: string;
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  text?: string;
  html: string;
};

export default abstract class EmailMessage {
  protected abstract from?: string;
  protected to?: string;
  protected cc?: string;
  protected bcc?: string;
  protected abstract subject?: string;
  protected text?: string;
  protected abstract html?: string;

  setTo(to: string) {
    this.to = to;
    return this;
  }

  setFrom(from: string) {
    this.from = from;
    return this;
  }

  setSubject(subject: string) {
    this.subject = subject;
    return this;
  }

  setCc(cc: string) {
    this.cc = cc;
    return this;
  }

  setBcc(bcc: string) {
    this.bcc = bcc;
    return this;
  }

  setText(text: string) {
    this.text = text;
    return this;
  }

  setHtml(html: string) {
    this.html = html;
    return this;
  }

  abstract getMessage(): TMessage;
}
