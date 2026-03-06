import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="experience section-padding">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Professional <span>Experience</span></h2>
                    <p>My career journey and internships.</p>
                </motion.div>
                <div className="timeline">
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item glass"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="time">
                                <Calendar size={14} className="inline-icon" /> {exp.duration}
                            </div>
                            <div className="exp-content">
                                <h3><Briefcase size={20} className="inline-icon" color="var(--primary-color)" /> {exp.title}</h3>
                                {exp.company && <p className="company" style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '10px' }}>{exp.company}</p>}
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

