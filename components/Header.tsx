'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()

    return (
        <header>
            <h1>Katharina Luisa</h1>
            <nav>
                <Link className={pathname === '/' ? 'active' : ''} href="/">
                    home
                </Link>
                <Link className={pathname === '/gallery' ? 'active' : ''} href="/gallery">
                    gallery
                </Link>
                <Link className={pathname === '/about' ? 'active' : ''} href="/about">
                    about
                </Link>
                <Link className={pathname === '/contact' ? 'active' : ''} href="/contact">
                    contact
                </Link>
            </nav>
        </header>
    )
}