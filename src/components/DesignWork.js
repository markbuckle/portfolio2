import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    // tag: 'Product Design · Full-Stack',
    title: 'LifeSync',
    subtitle: 'Text-to-Calendar Management Application',
    description:
      'Designed and built an intelligent calendar management platform that makes booking appointments, events, and meetings easier than ever. Powered by an AI assistant that helps users stay organized like a personal CEO assistant. Deployed as a web and IOS application.',
    process: [
      'User Research',
      'Information Architecture',
      'Wireframes',
      'Prototyping',
      'Design System',
      'High-Fidelity UI',
      'Usability Testing',
      'System Architecture',
      'API Design',
      'Frontend Dev',
      'Backend Dev',
      'Cloud Deployment',
    ],
    tools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Docker', 'Vercel'],
    liveUrl: 'https://thelifesync.vercel.app/',
    gitUrl: 'https://github.com/markbuckle/lifesync',
    image: null,
  },
  {
    id: 2,
    // tag: 'Product Design · Full-Stack',
    title: 'HealthLync',
    subtitle: 'Personalized Health Tracker',
    description:
      'Comprehensive health tracking application that enables users to make sense of complex medical information through intelligent data processing, OCR extraction, and AI-powered insights. Features include interactive dashboards, a RAG chatbot for medical information retrieval, and a guided onboarding tutorial system.',
    process: [
      'User Research',
      'Wireframes',
      'Prototyping',
      'UI Design',
      'Interactive Dashboards',
      'Onboarding Flow',
      'Data Pipeline',
      'OCR Integration',
      'RAG Architecture',
      'Frontend Dev',
      'Backend Dev',
    ],
    tools: ['Figma', 'Node.js', 'Express', 'Python', 'MongoDB', 'Plotly.js', 'OpenAI', 'Anthropic Claude', 'Docker'],
    liveUrl: 'https://www.earlyhealthlync.com/',
    gitUrl: null,
    image: null,
  },
  {
    id: 3,
    // tag: 'SaaS · Full-Stack',
    title: 'FeedFlo',
    subtitle: 'User Feedback Management Web Application',
    description:
      'A SaaS platform for collecting, organizing, and acting on product feedback. Built with authentication, subscription billing, and a clean dashboard that helps teams triage and prioritize user insights at scale.',
    process: [
      'Technical Scoping',
      'System Architecture',
      'UI Design',
      'API Design',
      'Auth Flow',
      'Billing Integration',
      'Database Architecture',
      'Frontend Dev',
      'Cloud Deployment',
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'Shadcn UI', 'Clerk', 'Supabase', 'PostgreSQL', 'Stripe', 'Vercel'],
    liveUrl: 'https://saasdashboard.vercel.app/',
    gitUrl: 'https://github.com/markbuckle/saas-app',
    image: null,
  },
];

const gradients = [
  'linear-gradient(135deg, #0a0a0a 0%, #1a3a2a 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #1a2a3a 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #2a1a3a 100%)',
];

const CaseStudyCard = ({ study, index }) => (
  <motion.div
    className="case-study-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
  >
    {study.image ? (
      <img src={study.image} alt={study.title} className="case-study-image" />
    ) : (
      <div
        className="case-study-image"
        style={{
          background: gradients[index % gradients.length],
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

      <div className="case-study-links">
        {study.liveUrl && (
          <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="case-study-link">
            <ExternalLink size={13} /> Live
          </a>
        )}
        {study.gitUrl && (
          <a href={study.gitUrl} target="_blank" rel="noopener noreferrer" className="case-study-link case-study-link-ghost">
            <Github size={13} /> Code
          </a>
        )}
      </div>
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
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-subtitle">
          Here are a few of the end-to-end projects I've built spanning product design, full-stack development, and engineering — from user research and system architecture through to the shipped product.
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
