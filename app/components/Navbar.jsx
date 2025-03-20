import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <Link href="/" className="text-lg hover:underline">Lucius Aeby</Link>

            <div className="ml-auto flex gap-4">
                <Link href="/#about-me" className="text-lg hover:underline">About me</Link>
                <Link href="/#projects" className="text-lg hover:underline">Projects</Link>
            </div>
        </nav>
    )
}
