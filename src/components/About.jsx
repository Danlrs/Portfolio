import React from 'react';
import { Terminal, Cpu, Code2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text glass">
            <p>
              I'm Daniel Lucas, a Computer Engineering student at the State University of Feira de Santana (UEFS) and a software developer focused on delivering efficient and complete solutions for real-world problems.
            </p>
            <p>
              During my professional experience as an intern, I worked on the continuous evolution of systems, focusing on concrete results. I was responsible for implementing significant improvements in user interfaces and developing new features that made the applications more robust and comprehensive for clients.
            </p>
            <p>
              I have strong skills in performance optimization and software architecture. I carried out several adjustments in database queries and table restructuring to ensure that the systems operated with greater speed and efficiency. My work approach is centered on generating positive impact, building scalable applications, delivering reliable code and providing the best possible experience.
            </p>
          </div>

          <div className="about-skills">
            <div className="skill-card glass">
              <div className="skill-icon"><Code2 size={28} /></div>
              <h3>Front-end & Web</h3>
              <p>React, Next.js, Node.js, HTML, CSS, Angular, Ionic, TypeScript, JavaScript. Creating responsive applications and modern interfaces.</p>
            </div>

            <div className="skill-card glass">
              <div className="skill-icon"><Terminal size={28} /></div>
              <h3>Software & Backend</h3>
              <p>Python, Java, C/C++, NestJS, Django, Node.js, PostgreSQL, REST APIs, Docker, JWT.</p>
            </div>

            <div className="skill-card glass">
              <div className="skill-icon"><Cpu size={28} /></div>
              <h3>Embedded Systems</h3>
              <p>Experience with microcontrollers (BitDogLab and Raspberry Pi Pico), C/C++ development for hardware.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
