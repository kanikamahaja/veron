import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "./Feedback.css";

const feedbacks = [
  {
    name: "John Doe",
    review: "This platform has completely changed the way I interact with online communities. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    review: "A fantastic user experience! The discussions are engaging, and I love the interactive features.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    review: "Public forums and community engagement features are top-notch. A must-try for everyone!",
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <section className="feedback-container">
      <div className="feedback-content">
        <motion.h2
          className="feedback-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h2>

        <motion.p
          className="feedback-description"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here’s what our users think about our platform. Real feedback from real people!
        </motion.p>

        <div className="feedback-cards">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="feedback-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="feedback-name">{feedback.name}</h3>
              <p className="feedback-review">"{feedback.review}"</p>
              <div className="feedback-rating">
                {[...Array(feedback.rating)].map((_, i) => (
                  <FaStar key={i} className="star" style={{ display: "inline-block" }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;

