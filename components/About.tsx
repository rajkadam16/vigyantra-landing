"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCheckCircle, HiLightBulb, HiTrendingUp } from "react-icons/hi";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        {
            icon: HiCheckCircle,
            title: "Proven Expertise",
            description: "5+ years of delivering cutting-edge solutions",
        },
        {
            icon: HiLightBulb,
            title: "Innovation First",
            description: "Leveraging latest technologies and best practices",
        },
        {
            icon: HiTrendingUp,
            title: "Results Driven",
            description: "Focused on measurable business outcomes",
        },
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                                About VigyanTra Tech
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            VigyanTra Tech is a leading software development company specializing
                            in creating innovative digital solutions for businesses worldwide. We
                            combine technical excellence with creative thinking to deliver
                            products that drive growth and success.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                                    Our Mission
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 pl-4">
                                    To empower businesses with transformative technology solutions
                                    that drive innovation, efficiency, and sustainable growth.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 pl-4">
                                    To be the most trusted technology partner for businesses seeking
                                    to thrive in the digital age through cutting-edge solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Why Choose Us */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Why Choose Us?
                        </h3>
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
