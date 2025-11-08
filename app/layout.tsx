import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const poppinsSans = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins-sans",
})

export const metadata: Metadata = {
    title: "Katharina Luisa",
    description: "There are no words to describe my passion for dancing.",
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppinsSans.variable} antialiased`}>
                <Header />
                {children}
                <footer>
                    <p>Made with ❤️ by <a href="https://github.com/sebastiankrll/katharina-luisa" target="_blank">Brudi</a></p>
                </footer>
            </body>
        </html>
    )
}
