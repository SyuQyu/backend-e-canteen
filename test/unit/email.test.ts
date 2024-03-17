import EmailVerification, {
  html,
} from "../../services/email/templates/EmailVerification";
import dotenv from "dotenv/config";

test("Email", () => {
  const testData = {
    to: "test@test.com",
    token: "asdkjflkajfilewaikfajdslkf",
  };

  const expectResult = {
    from: process.env.EMAIL_USER as string,
    to: testData.to,
    subject: "Verify your email",
    html: html(testData.token),
  };

  const email = new EmailVerification()
    .setTo(testData.to)
    .setToken(testData.token)
    .getMessage();

  expect(email).toEqual(expectResult);
});
