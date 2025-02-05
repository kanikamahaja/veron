import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaHeart, FaReply, FaPlusCircle } from "react-icons/fa";
import "./Feature_2.css";

const Feature_2 = () => {
  return (
    <section className="feature-2-container">
      <div className="feature-2-content">
        <motion.h2 
          className="feature-2-title"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Community & Discussions
        </motion.h2>
        
        <motion.p 
          className="feature-2-description"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Engage in discussions with our <span className="highlight">Public Forums</span>.  
          Start a new post, interact with others by Liking, Commenting, and  
          Replying to messages. Let the conversations flow!
        </motion.p>
        
        <motion.div 
          className="feature-2-icons"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="icon-box">
            <FaPlusCircle className="icon" />
            <span>Create Post</span>
          </div>
          <div className="icon-box">
            <FaHeart className="icon" />
            <span>Like</span>
          </div>
          <div className="icon-box">
            <FaComments className="icon" />
            <span>Comment</span>
          </div>
          <div className="icon-box">
            <FaReply className="icon" />
            <span>Reply</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature_2;
