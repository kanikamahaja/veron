import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
    return (
        <motion.nav 
            className="navbar"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div 
                    className="logo"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="logo-text">Vision <span className="text-gradient">Sketch AI</span></h1>
                </motion.div>
                
                <motion.ul 
                    className="nav-links"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <li><a href="#" className="text-gray-300">Home</a></li>
                    <li><a href="#" className="text-gray-300">Whiteboard</a></li>
                    <li><a href="#" className="text-gray-300">Community</a></li>
                    <li><a href="#" className="text-gray-300">Feedback</a></li>
                    <li><a href="#" className="text-gray-300">Contact Us</a></li>
                </motion.ul>
                
                <motion.button 
                    className="btn-neon"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    Get Started
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
