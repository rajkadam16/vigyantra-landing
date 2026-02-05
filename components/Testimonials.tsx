"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiStar } from "react-icons/hi";

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechCorp Inc.",
            role: "CEO",
            quote:
                "VigyanTra Tech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
            avatar: "SJ",
            rating: 5,
        },
        {
            name: "Michael Chen",
            company: "HealthPlus",
            role: "CTO",
            quote:
                "Working with VigyanTra Tech was a game-changer for our healthcare platform. They understood our vision and brought it to life with cutting-edge technology.",
            avatar: "MC",
            rating: 5,
        },
        {
            name: "Emily Rodriguez",
            company: "FinanceHub",
            role: "Product Manager",
            quote:
                "The team's professionalism and dedication to quality made our mobile app project a huge success. Highly recommend their services!",
            avatar: "ER",
            rating: 5,
        },
    ];

    return (
        <section
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
                            Client Testimonials
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Hear what our clients say about working with us
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-6xl text-primary-200 dark:text-primary-900/30 font-serif">
                                "
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <HiStar key={i} className="w-5 h-5 text-yellow-500" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                                {testimonial.quote}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-lg">
                                        {testimonial.avatar}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>

                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
