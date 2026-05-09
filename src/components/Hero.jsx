import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-avatar-container delay-100">
            <div className="hero-avatar">
              <img src={profileImg} alt="Daniel Lucas" />
            </div>
            <h2 className="hero-subtitle">&lt; Computer Engineer Student /&gt;</h2>
          </div>
          <h1 className="hero-title delay-200">
            Hi, I'm <br />
            <span className="text-gradient">Daniel Lucas.</span>
          </h1>
          <p className="hero-description delay-300">
            Focused on developing software with innovative and intelligent solutions, seeking the creation of scalable architectures that generate real and efficient impact.
          </p>

          <div className="hero-cta delay-300">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="https://github.com/Danlrs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in delay-200">
          <div className="tech-panel glass">
            <div className="tech-panel-header">
              <div className="window-controls">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">developer.js</div>
            </div>
            <div className="tech-code">
              <pre>
                <code>
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> <span className="code-operator">=</span> {'{'}
                  <br />  <span className="code-property">name</span>: <span className="code-string">'Daniel Lucas'</span>,
                  <br />  <span className="code-property">role</span>: <span className="code-string">'Software Engineer'</span>,
                  <br />  <span className="code-property">skills</span>: [<span className="code-string">'Angular'</span>, <span className="code-string">'NestJS'</span>, <span className="code-string">'Python'</span>],
                  <br />  <span className="code-property">passion</span>: <span className="code-string">'Building scalable systems'</span>
                  <br />{'}'};
                  <br />
                  <br /><span className="code-variable">developer</span>.<span className="code-function">initialize</span>();
                </code>
              </pre>
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
