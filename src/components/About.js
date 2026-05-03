import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">About Me</p>
        <h2 className="section-title2">A builder who sweats the UX</h2>
        <p className="about-bio">
          I design, develop and engineer solutions. With a technical background
          and a mild obsession for next-level user interfaces, I like putting myself in the
          user's shoes when I build products.
        </p>
      </motion.div>

      <motion.div
        className="about-details-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="about-detail-col">
          <p className="about-detail-label">Education</p>
          <p className="about-detail-value">B. Eng - Memorial University of Newfoundland</p>
          <p className="about-detail-value">Web Development & Product Design - GetCoding</p>
          <p className="about-detail-value">Precision Health certification - University of Calgary</p>
        </div>

        <div className="about-detail-col">
          <p className="about-detail-label">Focus Areas</p>
          <p className="about-detail-value">
                  Full-stack Development
            <br />Product Design
            <br />Agile management
            <br />AI-Powered Products
          </p>
        </div>
      </motion.div>
    </div>
  );
};
