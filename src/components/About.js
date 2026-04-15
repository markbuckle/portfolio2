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
        <p className="section-label">About</p>
        <h2 className="section-title">Designing at the intersection of craft and code</h2>

        <div className="about-layout">
          <div className="about-text">
            <p>
              I'm a product designer who builds and ships fast. With a technical background
              and deep passion for healthcare and cybersecurity innovation, I bring a unique
              perspective that bridges technical feasibility with user-centered design.
            </p>
            <p>
              Whether designing intuitive interfaces or building full-stack applications,
              I'm driven by creating experiences that empower people. I think end-to-end —
              from understanding user problems and defining interaction models, to crafting
              polished UI and shipping high-quality product experiences.
            </p>
          </div>

          <div className="about-details">
            <div>
              <p className="about-detail-label">Education</p>
              <p className="about-detail-value">
                B.Eng — Memorial University of Newfoundland
              </p>
              <p className="about-detail-value">
                Precision Health — University of Calgary (Post-Grad)
              </p>
              <p className="about-detail-value">
                Web Development & Product Design — GetCoding
              </p>
            </div>

            <div>
              <p className="about-detail-label">Focus Areas</p>
              <p className="about-detail-value">
                Product Design · B2B SaaS · Healthcare · AI-Powered Products · Design Systems
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
