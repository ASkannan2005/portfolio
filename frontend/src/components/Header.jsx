import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ profile }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const firstName = profile?.name?.split(' ')[0] || 'Kannan';

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <nav className="container">

                <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setMobileOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a></li>
                    <li><a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a></li>
                    <li><a href="#internships" onClick={() => setMobileOpen(false)}>Internship</a></li>
                    <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
                </ul>
                <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </nav>
        </header>
    );
};

export default Header;

