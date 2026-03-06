import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.png';




const Hero = ({ profile }) => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="badge">Available for opportunities</span>
                    <h1><span>{profile.name}</span></h1>
                    <p className="description">{profile.summary}</p>

                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                    <div className="social-links">
                        <a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer" title="Email"><Mail size={20} /></a>
                        <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                        <a href={`tel:${profile.phone}`} title="Phone"><Phone size={20} /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="visual-blob"
                        animate={{
                            borderRadius: [
                                "30% 70% 70% 30% / 30% 30% 70% 70%",
                                "50% 50% 30% 70% / 50% 70% 30% 50%",
                                "30% 70% 70% 30% / 30% 30% 70% 70%"
                            ],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    ></motion.div>

                    <div className="image-container">
                        <img src={profileImg} alt={profile.name} />
                    </div>


                </motion.div>
            </div>
            <motion.a
                href="#about"
                className="scroll-down"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} />
            </motion.a>
        </section>
    );
};

export default Hero;

