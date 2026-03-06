import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ profile }) => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                <div className="footer-socials">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub"><Github size={20} /></a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                    <a href={`mailto:${profile.email}`} title="Email"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
