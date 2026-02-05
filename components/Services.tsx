"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiDeviceMobile, HiCloud, HiLightningBolt } from "react-icons/hi";

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: HiCode,
            title: "Web Development",
            description:
                "Build responsive, scalable web applications using modern frameworks like React, Next.js, and Node.js.",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: HiDeviceMobile,
            title: "Mobile App Development",
            description:
                "Create stunning native and cross-platform mobile apps for iOS and Android with React Native and Flutter.",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: HiCloud,
            title: "Cloud Solutions",
            description:
                "Deploy and manage scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.",
            gradient: "from-green-500 to-teal-500",
        },
        {
            icon: HiLightningBolt,
            title: "AI / Automation Solutions",
            description:
                "Leverage AI and machine learning to automate processes and gain intelligent insights from your data.",
            gradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section
            id="services"
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
                            Our Services
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive technology solutions tailored to your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Gradient Border on Hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                            />

                            <div
                                className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            >
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-20`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
