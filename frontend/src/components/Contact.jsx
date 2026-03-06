import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = ({ profile }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await axios.post('http://localhost:8000/api/contact', formData);
            setStatus('success');
            setStatusMessage(res.data.message || 'Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (err) {
            setStatus('error');
            setStatusMessage('Failed to send message. Please try again.');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Get In <span>Touch</span></h2>
                    <p>Let's collaborate on something amazing.</p>
                </motion.div>
                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <a href={`mailto:${profile.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                className="contact-card glass"
                                whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
                            >
                                <Mail size={24} color="var(--primary-color)" />
                                <div>
                                    <h4>Email</h4>
                                    <p>{profile.email}</p>
                                </div>
                            </motion.div>
                        </a>
                        <a href={`tel:+91${profile.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                className="contact-card glass"
                                whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
                            >
                                <Phone size={24} color="var(--primary-color)" />
                                <div>
                                    <h4>Call</h4>
                                    <p>+91 {profile.phone}</p>
                                </div>
                            </motion.div>
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                className="contact-card glass"
                                whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
                            >
                                <Linkedin size={24} color="var(--primary-color)" />
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p className="small-link">View Profile</p>
                                </div>
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.form
                        className="contact-form glass"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        onSubmit={handleSubmit}
                    >
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <><Loader2 size={18} className="spin-icon" /> Sending...</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                        <AnimatePresence>
                            {(status === 'success' || status === 'error') && (
                                <motion.div
                                    className={`form-status ${status}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {status === 'success' ? (
                                        <CheckCircle size={18} color="#4ade80" />
                                    ) : (
                                        <AlertCircle size={18} color="#f87171" />
                                    )}
                                    <span>{statusMessage}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
