import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="logo-accent">&gt;_</span> DL.
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</a>

          <div className="nav-controls" style={{ display: 'flex', alignItems: 'center' }}>
            <LanguageToggle />
          </div>

          <div className="nav-socials">
            <a href="https://github.com/Danlrs" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/danlrsilva/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
