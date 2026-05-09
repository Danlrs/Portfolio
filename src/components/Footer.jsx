import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Daniel Lucas</h3>
            <p>Software Developer building innovative and intelligent solutions.</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/Danlrs" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/danlrsilva/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Daniel Lucas Rios da Silva</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
