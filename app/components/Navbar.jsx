import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <Link href="/" className="text-lg hover:underline">Lucius Aeby</Link>
        </nav>
    )
}