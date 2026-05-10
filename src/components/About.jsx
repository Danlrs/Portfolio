import React from 'react';
import { Terminal, Cpu, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>

        <div className="about-grid">
          <div className="about-text glass">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          <div className="about-skills">
            <div className="skill-card glass">
              <div className="skill-icon"><Code2 size={28} /></div>
              <h3>{t('about.skill1.title')}</h3>
              <p>{t('about.skill1.desc')}</p>
            </div>

            <div className="skill-card glass">
              <div className="skill-icon"><Terminal size={28} /></div>
              <h3>{t('about.skill2.title')}</h3>
              <p>{t('about.skill2.desc')}</p>
            </div>

            <div className="skill-card glass">
              <div className="skill-icon"><Cpu size={28} /></div>
              <h3>{t('about.skill3.title')}</h3>
              <p>{t('about.skill3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
