import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <h1>Hallo</h1>
            <Link href="/">Homepage</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
        </nav>
    )
}