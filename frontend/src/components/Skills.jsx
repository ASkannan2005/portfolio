import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, PenTool, Code, Laptop } from 'lucide-react';

const Skills = ({ skills }) => {
    const categories = [...new Set(skills.map(s => s.category))];

    const getIcon = (category) => {
        const icons = {
            "Data & Analytics": <Database size={32} />,
            "Cloud & ML": <Cloud size={32} />,
            "UI/UX Design": <PenTool size={32} />,
            "Programming": <Code size={32} />
        };
        return icons[category] || <Laptop size={32} />;
    };

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Technical <span>Skills</span></h2>
                    <p>The tools and technologies I excel in.</p>
                </motion.div>
                <div className="skills-grid">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat}
                            className="skill-category glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, borderColor: "var(--primary-color)" }}
                        >
                            <div className="category-icon">{getIcon(cat)}</div>
                            <h3>{cat}</h3>
                            <ul>
                                {skills.filter(s => s.category === cat).map(skill => (
                                    <li key={skill.id}>{skill.name}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

