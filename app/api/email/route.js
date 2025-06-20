import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  // Check for visa consultation fields
  if (body?.visa) {
    const { name, email, phone, visa, message } = body;
    const transport = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "support@bestfaress.com",
        pass: "Bestfaress786@", // ⚠️ Don't hardcode this in production!
      },
    });
    const mailBody = `\nNew Visa Consultation Query Received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nVisa Type: ${visa}\nMessage: ${message || "N/A"}\n\nSubmitted via BestFaress.com\n`;
    const mailOptions = {
      from: "support@bestfaress.com",
      to: "support@bestfaress.com",
      subject: `Visa Consultation Query from ${name} (${email})`,
      text: mailBody,
    };
    try {
      await transport.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent" });
    } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }

  // Default: Flight booking
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
  } = body;

  const transport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "support@bestfaress.com",
      pass: "Bestfaress786@", // ⚠️ Don't hardcode this in production!
    },
  });

  const message = `\nNew Flight Booking Query Received:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nFrom: ${fromCity}\nTo: ${toCity}\n\nDeparting On: ${departing}\nReturning On: ${returning || "N/A"}\n\nAdults: ${adults}\nChildren: ${children}\n\nSubmitted via BestFaress.com\n`;

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
          console.log(err);
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
