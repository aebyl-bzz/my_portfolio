'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Main() {
    return (
        <div>

            {/* Intro Section */}
            <motion.div
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className="flex flex-col items-center p-40 justify-center text-white"
            >
                <h1 className="text-4xl">Hi, I am Lucius Aeby!</h1>
                <p className="p-4">17y old Student at a vocational IT school in Switzerland CH</p>
                <a href="https://github.com/aebyl-bzz" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/github-icon-2.svg"
                        width={60}
                        height={60}
                        alt="Github Icon"
                        className="hover:scale-110 transition-transform duration-300"
                    />
                </a>
            </motion.div>

            <div className="w-[calc(100%-10rem)] h-1 bg-purple-900 mx-20"></div>

            {/* About Me */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
                className="text-white p-6"
            >
                <h1 className="flex flex-col justify-center items-center p-4 text-3xl" id="about-me">ABOUT ME</h1>

                <div className="flex flex-row items-center justify-center px-10 gap-20 p-6">
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300"
                        src="/PortfolioAebyLucius.jpeg"
                        width={300}
                        height={400}
                        alt="Lucius Aeby"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-2xl mb-4">Lucius Aeby</h2>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                        <p className="mb-2">LoremIpsum LoremIpsum LoremIpsum LoremIpsum</p>
                    </div>
                </div>
            </motion.div>

            {/* Tech Stack Section */}
            <div className="flex flex-col items-center justify-center text-white mt-12 px-4 mb-20">
                <h2 className="text-2xl mb-4">I've worked with:</h2>
                <div className="flex flex-wrap justify-center gap-6">
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
                    {/* Add more as needed */}
                </div>
            </div>


            {/* CV Download */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
                className="flex justify-center mt-6 mb-12"
            >
                <a
                    href="/cv.pdf"
                    download
                    className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-2xl transition duration-300"
                >
                    Download CV
                </a>
            </motion.div>

            <div className="w-[calc(100%-10rem)] h-1 bg-purple-900 mx-20 mb-6"></div>


            {/* Projects Section */}
            <div className="flex flex-col items-center justify-center text-white p-6">
                <h1 id="projects" className="text-3xl mb-6">PROJECTS</h1>

                {/* Project 1 */}
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-row items-center justify-center gap-10 p-6"
                >
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 1"
                        width={300}
                        height={200}
                    />
                    <div>
                        <h2 className="text-2xl mb-2">Project One</h2>
                        <p className="mb-2">texttexttext texttexttext</p>
                        <p className="mb-2">texttexttext texttexttext</p>
                        <p className="mb-2">texttexttext texttexttext</p>
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-row-reverse items-center justify-center gap-10 p-6"
                >
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 2"
                        width={300}
                        height={200}
                    />
                    <div>
                        <h2 className="text-2xl mb-2">Project Two</h2>
                        <p className="mb-2">texttexttext texttexttext</p>
                        <p className="mb-2">texttexttext texttexttext</p>
                        <p className="mb-2">texttexttext texttexttext</p>
                    </div>
                </motion.div>

                {/* Project 3 */}
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-row items-center justify-center gap-10 p-6"
                >
                    <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 3"
                        width={300}
                        height={100}
                    />
                    <div>
                        <h2 className="text-2xl mb-2">Project Three</h2>
                        <p className="mb-2">texttexttext texttexttext</p>
                        <p className="mb-2">texttexttext texttexttext</p>
                        <p className="mb-2">texttexttext texttexttext</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
