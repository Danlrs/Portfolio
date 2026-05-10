import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    titleKey: 'proj.entrelinhas.title',
    descKey: 'proj.entrelinhas.desc',
    tags: ['Angular', 'NestJS', 'PostgreSQL', 'JWT', 'Fullstack'],
    github: 'https://github.com/Danlrs/Entre_Linhas',
    deploy: 'https://entrelinhas-lrs.pages.dev',
    featured: true
  },
  {
    id: 2,
    titleKey: 'proj.luminus.title',
    descKey: 'proj.luminus.desc',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Danlrs/Luminus',
    deploy: null,
    featured: false
  },
  {
    id: 3,
    titleKey: 'proj.pbljava.title',
    descKey: 'proj.pbljava.desc',
    tags: ['Java', 'JavaFX', 'JSON'],
    github: 'https://github.com/Danlrs/TickIt',
    deploy: null,
    featured: false
  },
  {
    id: 4,
    titleKey: 'proj.games.title',
    descKey: 'proj.games.desc',
    tags: ['C', 'C++', 'Embedded Systems', 'Hardware'],
    github: 'https://github.com/Danlrs/games_simulator_embarcatech',
    deploy: null,
    featured: false
  },
  {
    id: 5,
    titleKey: 'proj.notificacoes.title',
    descKey: 'proj.notificacoes.desc',
    tags: ['Python', 'Notifications', 'UEFS'],
    github: 'https://github.com/Danlrs/Notificacoes_ecomp',
    deploy: null,
    featured: false
  },
  {
    id: 6,
    titleKey: 'proj.escalonador.title',
    descKey: 'proj.escalonador.desc',
    tags: ['Python', 'Operating Systems', 'Scheduler'],
    github: 'https://github.com/Danlrs/Escalonador_SO',
    deploy: null,
    featured: false
  },
  {
    id: 7,
    titleKey: 'proj.readme.title',
    descKey: 'proj.readme.desc',
    tags: ['Markdown', 'GitHub', 'Profile'],
    github: 'https://github.com/Danlrs/Danlrs',
    deploy: null,
    featured: false
  }
];

const ProjectCard = ({ project, t }) => {
  return (
    <div className={`project-card glass ${project.featured ? 'featured' : ''}`}>
      <div className="project-content">
        <h3 className="project-title">{t(project.titleKey)}</h3>
        <p className="project-description">{t(project.descKey)}</p>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub size={20} /> {t('projects.code')}
            </a>
          )}
          {project.deploy && (
            <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="project-link highlight-link">
              <ExternalLink size={20} /> {t('projects.deploy')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>

        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
