import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [categories] = useState([{ id: 1, name: "Vision Sketch AI" }]);

  return (
    <motion.footer 
      className="footer-section py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Newsletter */}
          <motion.div 
            className="text-center sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-2xl font-extrabold neon-text mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300">Stay updated with our latest features and news.</p>
            <form className="mt-4 space-y-3">
              <input type="email" className="input-neon" placeholder="Email" />
              <motion.button 
                className="btn-neon"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Categories */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-1">
              {categories.map((category) => (
                <li key={category.id} className="text-white text-sm hover:text-blue-500">
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-1">
              <li className="text-white text-sm hover:text-blue-500">FAQ</li>
              <li className="text-white text-sm hover:text-blue-500">Terms & Conditions</li>
              <li className="text-white text-sm hover:text-blue-500">Support</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-1">
              <li className="text-white text-sm hover:text-blue-500">White Board</li>
              <li className="text-white text-sm hover:text-blue-500">Public Forums</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h1 className="logo-text">Vision <span className="text-gradient">Sketch AI</span></h1>
            <p className="text-sm mb-4 text-gray-300">Your ultimate destination for AI-powered creativity.</p>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 mb-2">
              <FaEnvelope className="text-xl" />
              <span className="text-sm">jobsphere.in@gmail.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 mt-2">
              <FaPhone className="text-xl" />
              <span className="text-sm">+918360103913</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
