import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-gray-800">
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="/impressum">Impressum</Link>
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="/datenschutz">Datenschutz</Link>
        </footer>
    )
}

