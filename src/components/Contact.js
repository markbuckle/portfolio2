import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integrate with EmailJS or your preferred service
    setStatus("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's connect</h2>
      </motion.div>

      <div className="contact-layout">
        <div className="contact-info">
          <p>
            I'm currently open to product design and full-stack development opportunities.
            Whether you have a project in mind or just want to say hello, I'd love to hear from you.
          </p>
          <div className="contact-social">
            <a href="https://github.com/markbuckle" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mark-buckle-146316326/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:mark@example.com">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-trace">
            Send message
            <svg className="trace-svg" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="contact-trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00e5a0" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <rect className="trace-rect" x="1.5" y="1.5" rx="26.5" pathLength="600" stroke="url(#contact-trace-grad)" />
            </svg>
          </button>
          {status && <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{status}</p>}
        </form>
      </div>
    </div>
  );
};
