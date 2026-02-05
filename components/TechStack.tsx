"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNode, FaAws, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiSpring, SiTypescript } from "react-icons/si";

const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const technologies = [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
        { name: "Node.js", icon: FaNode, color: "text-green-600" },
        { name: "Java", icon: FaJava, color: "text-red-600" },
        { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    ];

    return (
        <section
            ref={ref}
            className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                            Our Tech Stack
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Powered by cutting-edge technologies and frameworks
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <IconComponent className={`w-16 h-16 md:w-20 md:h-20 ${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                                    {tech.name}
                                </h3>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
