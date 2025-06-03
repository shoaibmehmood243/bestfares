import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const {
    fullName,
    email,
    phone,
    fromCity,
    toCity,
    departing,
    returning,
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

Name: ${fullName}
Email: ${email}
Phone: ${phone}

From: ${fromCity}
To: ${toCity}

Departing On: ${departing}
Returning On: ${returning || "N/A"}

Adults: ${adults}
Children: ${children}

Submitted via BestFaress.com
`;

  const mailOptions = {
    from: "support@bestfaress.com",
    to: "support@bestfaress.com",
    subject: `Flight Booking Query from ${fullName} (${email})`,
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
