import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const transporter = createTransport({
            host: 'smtp.ionos.de',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: "Katharina-Luisa.com: New Contact Form Submission",
            text: `Name: ${name}, Email: ${email}\n\nMessage:\n${message}`,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
    }
}