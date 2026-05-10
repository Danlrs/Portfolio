import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle-container" onClick={toggleLanguage} role="switch" aria-checked={language === 'en'}>
      <div className={`toggle-slider ${language}`} />
      <span className={`toggle-label ${language === 'pt' ? 'active' : 'inactive'}`}>PT</span>
      <span className={`toggle-label ${language === 'en' ? 'active' : 'inactive'}`}>EN</span>
    </div>
  );
};

export default LanguageToggle;
