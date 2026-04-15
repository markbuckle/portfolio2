import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    tag: 'Product Design · Full-Stack',
    title: 'LifeSync',
    subtitle: 'AI-Powered Life Management Platform',
    description:
      'Designed and built an intelligent life management platform that consolidates appointments, tasks, projects, and calendar management into a single unified experience. Powered by an AI assistant that helps users stay organized like a personal CEO assistant.',
    process: [
      'User Research',
      'Information Architecture',
      'Wireframes',
      'Prototyping',
      'Design System',
      'High-Fidelity UI',
      'Usability Testing',
      'Frontend Dev',
    ],
    tools: ['Figma', 'Penpot', 'NanoBanana', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'GraphQL', 'PostgreSQL'],
    previewUrl: '#', // Update with live URL
    image: null, // Add screenshot path
  },
  {
    id: 2,
    tag: 'Product Design · Full-Stack',
    title: 'HealthLync',
    subtitle: 'Personalized Health Tracker',
    description:
      'Designed a comprehensive health tracking application that enables users to make sense of complex medical information through intelligent data processing, OCR extraction, and AI-powered insights. Features include interactive dashboards, a RAG chatbot for medical information retrieval, and a guided onboarding tutorial system.',
    process: [
      'User Research',
      'Wireframes',
      'Prototyping',
      'UI Design',
      'Interactive Dashboards',
      'Onboarding Flow',
      'Frontend Dev',
    ],
    tools: ['Figma', 'Penpot', 'NanoBanana', 'Node.js', 'Express', 'MongoDB', 'Plotly.js', 'OpenAI', 'Anthropic Claude'],
    previewUrl: 'https://www.earlyhealthlync.com/',
    image: null, // Add screenshot path
  },
];

const CaseStudyCard = ({ study, index }) => (
  <motion.div
    className="case-study-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
  >
    {study.image && (
      <img src={study.image} alt={study.title} className="case-study-image" />
    )}
    {!study.image && (
      <div
        className="case-study-image"
        style={{
          background: index === 0
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a3a2a 100%)'
            : 'linear-gradient(135deg, #0a0a0a 0%, #1a2a3a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}
      >
        {study.title}
      </div>
    )}
    <div className="case-study-content">
      <p className="case-study-tag">{study.tag}</p>
      <h3 className="case-study-title">{study.subtitle}</h3>
      <p className="case-study-description">{study.description}</p>

      <div className="case-study-process">
        {study.process.map((step) => (
          <span key={step} className="process-tag">{step}</span>
        ))}
      </div>

      <div className="case-study-tools">
        {study.tools.map((tool) => (
          <span key={tool} className="tool-tag">{tool}</span>
        ))}
      </div>

      {study.previewUrl && study.previewUrl !== '#' && (
        <a
          href={study.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-link"
        >
          View project <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  </motion.div>
);

export const DesignWork = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Design Work</p>
        <h2 className="section-title">End-to-end product design</h2>
        <p className="section-subtitle">
          Case studies showcasing my design process — from user research and
          wireframing through prototyping, high-fidelity UI, and shipped product.
        </p>
      </motion.div>

      <div className="case-studies">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </div>
  );
};
