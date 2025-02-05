import React from "react";
import { motion } from "framer-motion";
import "./Feature_1.css";

const Feature_1 = () => {
    return (
        <section className="feature-section py-20">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div 
                        className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 className="text-4xl font-extrabold text-white neon-text mb-4">
                            Vision Sketch AI
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Experience the future of creativity with Vision Sketch AI. Our intelligent whiteboard application empowers you to sketch, draw, and visualize ideas effortlessly. 
                            With AI-powered enhancements, turn concepts into reality like never before.
                        </p>
                        <motion.button 
                            className="btn-neon"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="neon-border">
                            <img
                                src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a4554789-c2c9-4c7c-93a1-cbedf3f8bb62/1340332721/whiteboard-ai-screenshot.png"
                                alt="Vision Sketch AI"
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Feature_1;
