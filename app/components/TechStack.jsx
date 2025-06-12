'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaJava, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

const categories = {
    'All': [],
    'Frontend': [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    'Backend': [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    'DevOps & Tools': [
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
    ]
};

// Flatten all technologies for the "All" category
categories['All'] = Object.values(categories).flat().filter(tech => tech.name);

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8" id="skills">I'VE WORKED WITH</h2>
            
            {/* Category Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-[#84B] text-white'
                                : 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Tech Stack Grid */}
            <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {categories[activeCategory].map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <motion.div
                            key={tech.name}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm"
                        >
                            <Icon
                                className="w-12 h-12 mb-3"
                                style={{ color: tech.color }}
                            />
                            <span className="text-white font-medium">{tech.name}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
} 