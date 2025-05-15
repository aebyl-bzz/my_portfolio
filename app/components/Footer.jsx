import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-purple-900 text-white px-8 py-12 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <p className="mb-2">Lucius Aeby</p>
                    <p className="mb-2">lucius.aeby@icloud.com</p>
                    <p className="mb-2">Switzerland</p>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/#about-me" className="hover:underline">About Me</Link></li>
                        <li><Link href="/#projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/cv.pdf" className="hover:underline" download>Download CV</Link></li>
                        <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
                        <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/aebyl-bzz" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/github-icon-2.svg"
                                alt="GitHub"
                                width={30}
                                height={30}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                        {/* Add more icons if needed */}
                        {/* Example for LinkedIn */}
                        {/*
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedin-icon.svg" alt="LinkedIn" width={30} height={30} />
                        </a>
                        */}
                    </div>
                </div>
            </div>

            <div className="border-t border-purple-700 mt-8 pt-4 text-center text-sm text-purple-300">
                &copy; {new Date().getFullYear()} Lucius Aeby. All rights reserved.
            </div>
        </footer>
    );
}
