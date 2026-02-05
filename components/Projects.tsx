"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
            image: "/projects/ecommerce.jpg",
            tags: ["Next.js", "Node.js", "MongoDB"],
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Healthcare Management System",
            description:
                "Comprehensive patient management system with appointment scheduling and telemedicine features.",
            image: "/projects/healthcare.jpg",
            tags: ["React", "Spring Boot", "PostgreSQL"],
            gradient: "from-green-500 to-teal-500",
        },
        {
            title: "FinTech Mobile App",
            description:
                "Secure mobile banking application with real-time transactions and AI-powered insights.",
            image: "/projects/fintech.jpg",
            tags: ["React Native", "AWS", "AI/ML"],
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "IoT Dashboard",
            description:
                "Real-time monitoring dashboard for IoT devices with predictive analytics and alerts.",
            image: "/projects/iot.jpg",
            tags: ["Vue.js", "Python", "MongoDB"],
            gradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20 md:py-32 bg-white dark:bg-gray-900"
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
                            Our Portfolio
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Showcasing our best work and successful project deliveries
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 bg-gradient-to-br overflow-hidden">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold opacity-20">
                                        {project.title.charAt(0)}
                                    </div>
                                </div>
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <HiExternalLink className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Gradient Border Effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
