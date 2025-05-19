import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const {
    name,
    email,
    phone,
    fromCity,
    toCity,
    departingOn,
    returningOn,
    adults,
    children,
  } = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "support@bestfaress.com",
      pass: "Bestfaress786@", // ⚠️ Don't hardcode this in production!
    },
  });

  const message = `
New Flight Booking Query Received:

Name: ${name}
Email: ${email}
Phone: ${phone}

From: ${fromCity}
To: ${toCity}

Departing On: ${departingOn}
Returning On: ${returningOn || "N/A"}

Adults: ${adults}
Children: ${children}

Submitted via BestFaress.com
`;

  const mailOptions = {
    from: "support@bestfaress.com",
    to: "support@bestfaress.com",
    subject: `Flight Booking Query from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
            console.log(err)
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
