import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Database, BarChart3, X, ChevronLeft, ChevronRight, Award } from 'lucide-react';

const Internships = ({ projects }) => {
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Filter only projects that are internships
    const internshipProjects = projects.filter(proj =>
        proj.title.toLowerCase().includes('internship')
    );

    const openGallery = (imageString) => {
        const images = imageString.split(',');
        setSelectedGallery(images);
        setCurrentIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % selectedGallery.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
    };

    const getProjectIcon = (tags) => {
        const lowerTags = (tags || "").toLowerCase();
        if (lowerTags.includes('power bi') || lowerTags.includes('analytics')) return <BarChart3 size={64} color="var(--primary-color)" strokeWidth={1} />;
        if (lowerTags.includes('sql') || lowerTags.includes('database')) return <Database size={64} color="var(--primary-color)" strokeWidth={1} />;
        if (lowerTags.includes('react') || lowerTags.includes('web') || lowerTags.includes('frontend')) return <Layout size={64} color="var(--primary-color)" strokeWidth={1} />;
        return <Award size={64} color="var(--primary-color)" strokeWidth={1} />;
    };

    return (
        <section id="internships" className="internships section-padding">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Professional <span>Internships</span></h2>
                    <p>Hands-on experience and certifications from leading organizations.</p>
                </motion.div>
                <div className="projects-grid">
                    {internshipProjects.map((proj, idx) => (
                        <motion.div
                            key={proj.id}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-img-placeholder" style={{ height: '350px' }}>
                                {proj.image ? (
                                    <img
                                        src={new URL(`../assets/projects/${proj.image.split(',')[0]}`, import.meta.url).href}
                                        alt={proj.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'rgba(255,255,255,0.02)', cursor: 'pointer', padding: '10px' }}
                                        onClick={() => openGallery(proj.image)}
                                    />
                                ) : (
                                    getProjectIcon(proj.tags)
                                )}
                            </div>

                            <div className="project-content">
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                <div className="project-tags">
                                    {proj.tags.split(',').map(tag => (
                                        <span key={tag.trim()} className="glass-tag">
                                            <Code2 size={12} className="inline-icon" /> {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            zIndex: 9999,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setSelectedGallery(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', display: 'flex', alignItems: 'center' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedGallery(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '0',
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    zIndex: 10001
                                }}
                            >
                                <X size={32} />
                            </button>

                            {selectedGallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        style={{
                                            position: 'absolute',
                                            left: '-60px',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '50%',
                                            width: '50px',
                                            height: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 10001
                                        }}
                                    >
                                        <ChevronLeft size={32} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        style={{
                                            position: 'absolute',
                                            right: '-60px',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '50%',
                                            width: '50px',
                                            height: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 10001
                                        }}
                                    >
                                        <ChevronRight size={32} />
                                    </button>
                                </>
                            )}

                            <motion.img
                                key={selectedGallery[currentIndex]}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                src={new URL(`../assets/projects/${selectedGallery[currentIndex]}`, import.meta.url).href}
                                alt="Internship Certificate"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Internships;
