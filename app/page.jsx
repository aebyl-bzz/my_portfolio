'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesText } from '@/components/ui/sparkles-text';

export default function Main() {
    return (
        <div>
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center text-white min-h-[80vh] md:min-h-[60vh] p-10 md:p-40"
            >
                <div className="flex flex-col items-center gap-8 md:gap-10">
                    <h1 className="text-4xl md:text-3xl mb-4 md:mb-10 text-center">
                        Hi, I am <SparklesText text="Lucius Aeby" />
                    </h1>
                    <p className="text-xl md:text-lg text-gray-300 text-center max-w-md">
                        A passionate developer crafting modern web experiences
                    </p>
                    <a href="https://github.com/aebyl-bzz" target="_blank" rel="noopener noreferrer" className="mt-4">
                        <Image
                            src="/github-icon-2.svg"
                            width={60}
                            height={60}
                            alt="Github Icon"
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </div>
            </motion.div>

            <div className="w-[calc(100%-2rem)] md:w-[calc(100%-10rem)] h-1 bg-purple-900 mx-4 md:mx-20"></div>

            {/* About Me */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
                className="text-white p-4 md:p-6"
            >
                <h1 className="flex flex-col justify-center items-center p-4 text-2xl md:text-3xl" id="about-me">ABOUT ME</h1>

                <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-8 md:gap-20 p-4 md:p-6">
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-[250px] md:w-[300px]"
                        src="/PortfolioAebyLucius.jpeg"
                        width={300}
                        height={400}
                        alt="Lucius Aeby"
                    />
                    <div className="flex flex-col text-center md:text-left">
                        <h2 className="text-xl md:text-2xl mb-4">Lucius Aeby</h2>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                    </div>
                </div>
            </motion.div>

            {/* Tech Stack Section */}
            <div className="flex flex-col items-center justify-center text-white mt-8 md:mt-12 px-4 mb-12 md:mb-20">
                <h2 className="text-xl md:text-2xl mb-4">I've worked with:</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <Image
                        src="/github-icon-2.svg"
                        width={40}
                        height={40}
                        alt="Tech 1"
                        className="hover:scale-110 transition-transform duration-300"
                    />
                    <Image
                        src="/github-icon-2.svg"
                        width={40}
                        height={40}
                        alt="Tech 2"
                        className="hover:scale-110 transition-transform duration-300"
                    />
                    <Image
                        src="/github-icon-2.svg"
                        width={40}
                        height={40}
                        alt="Tech 3"
                        className="hover:scale-110 transition-transform duration-300"
                    />
                    <Image
                        src="/github-icon-2.svg"
                        width={40}
                        height={40}
                        alt="Tech 4"
                        className="hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* CV Download */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
                className="flex justify-center mt-6 mb-8 md:mb-12"
            >
                <a
                    href="/cv.pdf"
                    download
                    className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-2xl transition duration-300"
                >
                    Download CV
                </a>
            </motion.div>

            <div className="w-[calc(100%-2rem)] md:w-[calc(100%-10rem)] h-1 bg-purple-900 mx-4 md:mx-20 mb-6"></div>

            {/* Projects Section */}
            <div className="flex flex-col items-center justify-center text-white p-4 md:p-6">
                <h1 id="projects" className="text-2xl md:text-3xl mb-6">PROJECTS</h1>

                {/* Project 1 */}
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 md:p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm mb-8 w-[95%] md:w-[90%] max-w-4xl"
                >
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-full md:w-auto"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 1"
                        width={300}
                        height={200}
                    />
                    <div className="flex flex-col text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <h2 className="text-xl md:text-2xl">Project One</h2>
                            <a 
                                href="https://github.com/aebyl-bzz/project-one" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-purple-100 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">JavaScript</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-md text-sm">React</span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm">Node.js</span>
                        </div>
                        <p className="mb-2 text-gray-300">A full-stack web application that demonstrates modern web development practices.</p>
                        <p className="mb-2 text-gray-300">Features include user authentication, real-time updates, and responsive design.</p>
                        <div className="mt-4">
                            <a 
                                href="https://project-one-demo.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-10 p-4 md:p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm mb-8 w-[95%] md:w-[90%] max-w-4xl"
                >
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-full md:w-auto"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 2"
                        width={300}
                        height={200}
                    />
                    <div className="flex flex-col text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <h2 className="text-xl md:text-2xl">Project Two</h2>
                            <a 
                                href="https://github.com/aebyl-bzz/project-two" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-purple-100 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-md text-sm">Python</span>
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">Django</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-md text-sm">PostgreSQL</span>
                        </div>
                        <p className="mb-2 text-gray-300">A robust backend system with RESTful API endpoints and database management.</p>
                        <p className="mb-2 text-gray-300">Implements advanced features like caching, authentication, and data validation.</p>
                        <div className="mt-4">
                            <a 
                                href="https://project-two-demo.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 3 */}
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 md:p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm mb-8 w-[95%] md:w-[90%] max-w-4xl"
                >
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-full md:w-auto"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 3"
                        width={300}
                        height={200}
                    />
                    <div className="flex flex-col text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <h2 className="text-xl md:text-2xl">Project Three</h2>
                            <a 
                                href="https://github.com/aebyl-bzz/project-three" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-purple-100 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">TypeScript</span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm">Next.js</span>
                            <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded-md text-sm">Tailwind CSS</span>
                        </div>
                        <p className="mb-2 text-gray-300">A modern web application built with the latest frontend technologies.</p>
                        <p className="mb-2 text-gray-300">Features include server-side rendering, responsive design, and optimized performance.</p>
                        <div className="mt-4">
                            <a 
                                href="https://project-three-demo.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

