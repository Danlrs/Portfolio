import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Entre Linhas',
    description: 'A full-stack web application for a small textile / handmade goods business',
    tags: ['Angular', 'NestJS', 'PostgreSQL', 'JWT', 'Fullstack'],
    github: 'https://github.com/Danlrs/Entre_Linhas',
    deploy: 'https://entrelinhas-lrs.pages.dev',
    featured: true
  },
  {
    id: 2,
    title: 'Luminus',
    description: 'A full-stack academic dossier management system',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Danlrs/Luminus',
    deploy: null,
    featured: false
  },
  {
    id: 3,
    title: 'TickIt',
    description: 'A desktop ticket sales system',
    tags: ['Java', 'JavaFX', 'JSON'],
    github: 'https://github.com/Danlrs/TickIt',
    deploy: null,
    featured: false
  },
  {
    id: 4,
    title: 'Games Emulator',
    description: 'An embedded software project implementing a mini console with games like flappy bird and tic-tac-toe using BitDogLab',
    tags: ['C', 'C++', 'Embedded Systems', 'Hardware'],
    github: 'https://github.com/Danlrs/games_simulator_embarcatech',
    deploy: null,
    featured: false
  },
  {
    id: 5,
    title: 'Ecomp Notifications',
    description: 'Smart notifications system for the Computer Engineering course at UEFS',
    tags: ['Python', 'Notifications', 'UEFS'],
    github: 'https://github.com/Danlrs/Notificacoes_ecomp',
    deploy: null,
    featured: false
  },
  {
    id: 6,
    title: 'OS Scheduler',
    description: 'Process scheduler developed in operating systems course.',
    tags: ['Python', 'Operating Systems', 'Scheduler'],
    github: 'https://github.com/Danlrs/Escalonador_SO',
    deploy: null,
    featured: false
  },
  {
    id: 7,
    title: 'README',
    description: 'Repository focused on my GitHub profile, where I present an overview of myself and my skills through the README.',
    tags: ['Markdown', 'GitHub', 'Profile'],
    github: 'https://github.com/Danlrs/Danlrs',
    deploy: null,
    featured: false
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card glass ${project.featured ? 'featured' : ''}`}>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub size={20} /> Código
            </a>
          )}
          {project.deploy && (
            <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="project-link highlight-link">
              <ExternalLink size={20} /> Acessar
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos Recentes</h2>

        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
