import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const poppinsSans = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins-sans",
})

export const metadata: Metadata = {
    title: "Katharina Luisa",
    description: "There are no words to describe my passion for dancing.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppinsSans.variable} antialiased`}
            >
                <header>
                    <h1>Katharina Luisa</h1>
                    <nav>
                        <Link href="/">home</Link>
                        <Link href="/gallery">gallery</Link>
                        <Link href="/about">about</Link>
                        <Link href="/contact">contact</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    )
}
