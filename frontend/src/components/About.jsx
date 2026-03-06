import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Lightbulb, TrendingUp, BookOpen } from 'lucide-react';

const About = ({ profile }) => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>About <span>Me</span></h2>
                    <p>My journey in the world of data and technology.</p>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="about-description" style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--text-white)' }}>
                            Data analytics practitioner experienced in data modeling, visualization, and predictive analysis using Power BI, Python, SQL, and Machine Learning techniques. Developing climate change analytics solutions with structured data pipelines and clean interactive dashboards.
                        </p>
                        <div className="info-grid">
                            <div className="info-item glass" style={{ padding: '20px', borderRadius: '15px' }}>
                                <span className="label"><MapPin size={18} className="inline-icon" /> Location</span>
                                <span className="value">Tamil Nadu, India</span>
                            </div>
                            <div className="info-item glass" style={{ padding: '20px', borderRadius: '15px' }}>
                                <span className="label"><Lightbulb size={18} className="inline-icon" /> Interests</span>
                                <span className="value">Cloud, Python, SQL, ML</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="stat-card glass"
                            whileHover={{ scale: 1.05, borderColor: "var(--primary-color)", background: "rgba(59, 130, 246, 0.05)" }}
                            style={{ display: 'flex', alignItems: 'center', gap: '20px', textAlign: 'left', padding: '30px' }}
                        >
                            <TrendingUp size={40} color="var(--primary-color)" />
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Analytics</h3>
                                <p style={{ color: 'var(--text-gray)' }}>Visualization Enthusiast</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="stat-card glass"
                            whileHover={{ scale: 1.05, borderColor: "var(--primary-color)", background: "rgba(59, 130, 246, 0.05)" }}
                            style={{ display: 'flex', alignItems: 'center', gap: '20px', textAlign: 'left', padding: '30px' }}
                        >
                            <BookOpen size={40} color="var(--primary-color)" />
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Learning</h3>
                                <p style={{ color: 'var(--text-gray)' }}>Continuous Evolution</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

