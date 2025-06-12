'use client';

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-[#84B] text-white z-50">
            <Link href="/" className="text-lg hover:underline">Lucius Aeby</Link>

            {/* Mobile menu button */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex ml-auto gap-4">
                <Link href="/#about-me" className="text-lg hover:underline">About me</Link>
                <Link href="/#skills" className="text-lg hover:underline">Skills</Link>
                <Link href="/#projects" className="text-lg hover:underline">Projects</Link>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#84B] p-4 flex flex-col gap-4">
                    <Link href="/#about-me" className="text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>About me</Link>
                    <Link href="/#skills" className="text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Skills</Link>
                    <Link href="/#projects" className="text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                </div>
            )}
        </nav>
    )
}