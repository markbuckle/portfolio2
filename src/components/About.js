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
        <h2 className="section-title">Building at the intersection of craft and code</h2>

        <div className="about-layout">
          <div className="about-text">
            <p>
              I'm a developer who designs, builds and ships fast. With a technical background
              and deep passion for next-level user interfaces, I always put myself in the users shoes and when building products.
            </p>
          </div>

          <div className="about-details">
            <div>
              <p className="about-detail-label">Education</p>
              <p className="about-detail-value">
                B.Eng — Memorial University of Newfoundland
              </p>
              <p className="about-detail-value">
                Web Development & Product Design — GetCoding
              </p>
              <p className="about-detail-value">
                Precision Health certification — University of Calgary
              </p>
            </div>

            <div>
              <p className="about-detail-label">Focus Areas</p>
              <p className="about-detail-value">
                Product Design · B2B SaaS · Full-stack · AI-Powered Products · Design Systems
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
