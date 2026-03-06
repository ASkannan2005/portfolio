import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [profile, setProfile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [experience, setExperience] = useState([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);


        const fetchData = async () => {
            try {
                const [profileRes, skillsRes, projectsRes, expRes] = await Promise.all([
                    axios.get('/api/profile'),
                    axios.get('/api/skills'),
                    axios.get('/api/projects'),
                    axios.get('/api/experience')
                ]);
                setProfile(profileRes.data);
                setSkills(skillsRes.data);
                setProjects(projectsRes.data);
                setExperience(expRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    if (!profile) return <div className="loader">Loading...</div>;

    return (
        <div className="portfolio">
            <motion.div
                className="cursor-glow"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5
                }}
            />

            <Header profile={profile} />
            <main>
                <Hero profile={profile} />
                <About profile={profile} />
                <Skills skills={skills} />
                <Projects projects={projects.filter(p => !p.title.toLowerCase().includes('internship'))} />
                <Internships projects={projects} />
                <Experience experience={experience} />
                <Contact profile={profile} />
            </main>
            <Footer profile={profile} />
        </div>
    );
}

export default App;

