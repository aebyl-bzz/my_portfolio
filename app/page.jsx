'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesText } from '@/components/ui/sparkles-text';
import TechStack from './components/TechStack';

export default function Main() {
    return (
        <div>
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center text-white min-h-[80vh] md:min-h-[60vh] p-10 md:p-40 pt-24 md:pt-40"
            >                <div className="flex flex-col items-center gap-8 md:gap-10 px-4 md:px-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-3xl mb-4 md:mb-10 text-center">
                        Hi, I am <SparklesText text="Lucius Aeby" />
                    </h1>
                    <p className="text-xl md:text-lg text-gray-300 text-center max-w-xl mx-auto">
                    I'm a developer and student at Kantonsschule Hottingen, always exploring new ways to build and improve digital experiences.
                    </p><a href="https://github.com/aebyl-bzz" target="_blank" rel="noopener noreferrer" className="mt-4">
                        <Image
                            src="/github-icon-custom.svg"
                            width={55}
                            height={55}
                            alt="Github Icon"
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </div>
            </motion.div>

            {/* About Me */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
                className="text-white p-4 md:p-6 mt-16"
            >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="p-4 text-2xl md:text-3xl font-bold" id="about-me">About me</h1>
                  <div className="w-12 h-1 bg-[#84B] rounded-full mb-4"></div>
                </div>
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
                        <p className="mb-2">I'm an 18-year-old developer currently attending Kantonsschule Hottingen.</p>
                        <p className="mb-2">In my free time, I enjoy playing soccer, skiing, gaming, and of course coding.</p>
                        <p className="mb-2">I'm especially interested in building clean, efficient projects and constantly learning new technologies.</p>
                    </div>
                </div>
                {/* Hobbys Section */}                <div className="mt-12 flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Hobbies</h3>
                  <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
                    <div className="flex flex-col items-center max-w-sm w-64">
                      <Image
                        src="/fussball_portfolio.jpg"
                        width={256}
                        height={192}
                        alt="Football"
                        className="rounded-md mb-3 object-cover w-64 h-48 shadow-lg"
                      />
                      <p className="text-center text-gray-300 text-base mt-3">I've been playing football since I was 5 years old and I'm currently active at FC Redstar.</p>
                    </div>
                    <div className="flex flex-col items-center max-w-sm w-64">
                      <Image
                        src="/skifahren_myportfolio.jpg"
                        width={256}
                        height={192}
                        alt="Skiing"
                        className="rounded-md mb-3 object-cover w-64 h-48 shadow-lg"
                      />
                      <p className="text-center text-gray-300 text-base mt-3">I used to be in the Lenzerheide Ski Club, but now I mostly ski with family and friends.</p>
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* Tech Stack Section */}
            <div className="w-full max-w-6xl mx-auto px-4 py-8 mt-16">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2" id="skills">I've worked with</h2>
                <div className="w-12 h-1 bg-[#84B] rounded-full mb-8"></div>
              </div>
              <TechStack />
            </div>

            {/* Projects Section */}
            <div className="flex flex-col items-center justify-center text-white p-4 md:p-6 mt-16">
                <div className="flex flex-col justify-center items-center">
                  <h1 id="projects" className="text-2xl md:text-3xl font-bold mb-2">Projects</h1>
                  <div className="w-12 h-1 bg-[#84B] rounded-full mb-8"></div>
                </div>
                {/* Project 1 */}
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 md:p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm mb-8 w-full max-w-4xl"
                >
                    <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <h2 className="text-xl md:text-2xl">Stock-Screener</h2>
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
                            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-md text-sm">Python</span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm">Node.js</span>
                        </div>
                        <p className="mb-2 text-gray-300">A stock screener that allows you to track stocks, gives you suggestions helps you track stocks and more.</p>
                        <p className="mb-2 text-gray-300">It includes intergrated ai, which scours the web related to any news related to the stock you are tracking, evaluates it and gives you a rating based on the news.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-full md:w-auto"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 1"
                        width={300}
                        height={200}
                      />
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-10 p-4 md:p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm mb-8 w-full max-w-4xl"
                >
                    <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <h2 className="text-xl md:text-2xl">project cyberattacks</h2>
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
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">JavaScript</span>
                            <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm">HTML</span>
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">CSS</span>
                        </div>
                        <p className="mb-2 text-gray-300">A Webpage about the cyberattacks in Ukraine</p>
                        <p className="mb-2 text-gray-300">It has many responsive features, such as an interactive map, a timeline of the attacks and more.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-full md:w-auto"
                        src="/cyberattacks_demoImage.png"
                        alt="Project 2"
                        width={300}
                        height={200}
                      />
                    </div>
                </motion.div>
                {/* Project 3 */}
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 md:p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm mb-8 w-full max-w-4xl"
                >
                    <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center">
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
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-sm">Next.js</span>
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md text-sm">Tailwind CSS</span>
                        </div>
                        <p className="mb-2 text-gray-300">Work in progress</p>
                        <p className="mb-2 text-gray-300"></p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        className="rounded-md hover:scale-105 transition-transform duration-300 w-full md:w-auto"
                        src="/elementor-placeholder-image.webp"
                        alt="Project 3"
                        width={300}
                        height={200}
                      />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

