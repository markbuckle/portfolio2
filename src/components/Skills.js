import React from 'react';
import { motion } from 'framer-motion';

const designSkills = [
  'Figma', 'Penpot', 'NanoBanana', 'Wireframing', 'Prototyping',
  'Design Systems', 'User Research', 'Usability Testing', 'UI Design',
  'Interaction Design', 'Information Architecture',
];

const devSkills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  'Java', 'HTML5', 'CSS3', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'FastAPI',
  'AWS', 'Docker', 'Git',
];

const SkillChip = ({ name, delay }) => (
  <motion.div
    className="skill-chip"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
  >
    {name}
  </motion.div>
);

export const Skills = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Skills & Tools</p>
        <h2 className="section-title">What I work with</h2>
      </motion.div>

      <div className="skills-groups">
        <div>
          <p className="skills-group-label">Design</p>
          <div className="skills-grid">
            {designSkills.map((skill, i) => (
              <SkillChip key={skill} name={skill} delay={i * 0.03} />
            ))}
          </div>
        </div>

        <div>
          <p className="skills-group-label">Development</p>
          <div className="skills-grid">
            {devSkills.map((skill, i) => (
              <SkillChip key={skill} name={skill} delay={i * 0.03} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
