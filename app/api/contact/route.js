// File: app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, service, budget } = await request.json();

    // Configure Hostinger SMTP transporter with correct email
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // info@nevoraalabs.com
        pass: process.env.SMTP_PASS, // @Nevora88
      },
    });

    // Mail options with matching sender and recipient
    const mailOptions = {
      from: `"Nevora Labs Website" <info@nevoraalabs.com>`,
      to: 'info@nevoraalabs.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name} (${service})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #021024;">New Project Inquiry - Nevora Labs</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Required Discipline:</strong> ${service}</p>
          <p><strong>Target Budget:</strong> ${budget}</p>
          <hr style="border: 0; border-top: 1px solid #ccc;" />
          <p><strong>Project Goals & Bottlenecks:</strong></p>
          <p style="background: #fff; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}