import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default 'en' as requested

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    
    'hero.subtitle': '< Estudante de Engenharia de Computação />',
    'hero.title.prefix': 'Olá, eu sou',
    'hero.description': 'Focado em desenvolver softwares com soluções inovadoras e inteligentes, buscando a criação de arquiteturas escaláveis que geram impacto real e eficiente.',
    'hero.btn.projects': 'Ver Projetos',
    'hero.btn.github': 'GitHub',
    
    'about.title': 'Sobre Mim',
    'about.p1': 'Sou Daniel Lucas, estudante de Engenharia de Computação na Universidade Estadual de Feira de Santana (UEFS) e desenvolvedor de software focado em entregar soluções eficientes e completas para problemas do mundo real.',
    'about.p2': 'Durante minha experiência profissional como estagiário, atuei na evolução contínua de sistemas com foco em resultados concretos. Fui responsável por implementar melhorias significativas em interfaces de usuário e desenvolver novas funcionalidades que tornaram as aplicações mais robustas e abrangentes para os clientes.',
    'about.p3': 'Tenho fortes habilidades em otimização de desempenho e arquitetura de software. Realizei diversos ajustes em consultas de banco de dados e reestruturação de tabelas para garantir que os sistemas operassem com maior velocidade e eficiência. Minha abordagem de trabalho é centrada em gerar impacto positivo, construir aplicações escaláveis, entregar código confiável e proporcionar a melhor experiência possível.',
    'about.skill1.title': 'Front-end e Web',
    'about.skill1.desc': 'React, Next.js, Node.js, HTML, CSS, Angular, Ionic, TypeScript, JavaScript. Criação de aplicações responsivas e interfaces modernas.',
    'about.skill2.title': 'Software e Backend',
    'about.skill2.desc': 'Python, Java, C/C++, NestJS, Django, Node.js, PostgreSQL, APIs REST, Docker, JWT.',
    'about.skill3.title': 'Sistemas Embarcados',
    'about.skill3.desc': 'Experiência com microcontroladores (BitDogLab e Raspberry Pi Pico), desenvolvimento em C/C++ para hardware.',
    
    'projects.title': 'Projetos Recentes',
    'projects.code': 'Código',
    'projects.deploy': 'Acessar Deploy',
    
    'proj.entrelinhas.title': 'Entre Linhas',
    'proj.entrelinhas.desc': 'Aplicação web full-stack para um pequeno negócio de produtos têxteis / artesanais',
    
    'proj.luminus.title': 'Luminus',
    'proj.luminus.desc': 'Sistema full-stack de gestão de dossiês acadêmicos',
    
    'proj.pbljava.title': 'TickIt',
    'proj.pbljava.desc': 'Sistema desktop para venda de ingressos',
    
    'proj.games.title': 'Emulador de Jogos',
    'proj.games.desc': 'Projeto de software embarcado implementando um mini console com jogos como Flappy Bird e Jogo da Velha utilizando a BitDogLab',
    
    'proj.notificacoes.title': 'Notificações Ecomp',
    'proj.notificacoes.desc': 'Sistema inteligente de notificações para o curso de Engenharia de Computação na UEFS',

    'proj.escalonador.title': 'Escalonador de SO',
    'proj.escalonador.desc': 'Escalonador de processos desenvolvido na disciplina de sistemas operacionais.',

    'proj.readme.title': 'README',
    'proj.readme.desc': 'Repositório focado no meu perfil do GitHub, onde apresento uma visão geral sobre mim e minhas habilidades através do README.',

    'footer.desc': 'Desenvolvedor de Software construindo soluções inovadoras e inteligentes.',
    'footer.rights': 'Daniel Lucas Rios da Silva'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    
    'hero.subtitle': '< Computer Engineer Student />',
    'hero.title.prefix': "Hi, I'm",
    'hero.description': 'Focused on developing software with innovative and intelligent solutions, seeking the creation of scalable architectures that generate real and efficient impact.',
    'hero.btn.projects': 'View Projects',
    'hero.btn.github': 'GitHub',
    
    'about.title': 'About Me',
    'about.p1': "I'm Daniel Lucas, a Computer Engineering student at the State University of Feira de Santana (UEFS) and a software developer focused on delivering efficient and complete solutions for real-world problems.",
    'about.p2': "During my professional experience as an intern, I worked on the continuous evolution of systems, focusing on concrete results. I was responsible for implementing significant improvements in user interfaces and developing new features that made the applications more robust and comprehensive for clients.",
    'about.p3': "I have strong skills in performance optimization and software architecture. I carried out several adjustments in database queries and table restructuring to ensure that the systems operated with greater speed and efficiency. My work approach is centered on generating positive impact, building scalable applications, delivering reliable code and providing the best possible experience.",
    'about.skill1.title': 'Front-end & Web',
    'about.skill1.desc': 'React, Next.js, Node.js, HTML, CSS, Angular, Ionic, TypeScript, JavaScript. Creating responsive applications and modern interfaces.',
    'about.skill2.title': 'Software & Backend',
    'about.skill2.desc': 'Python, Java, C/C++, NestJS, Django, Node.js, PostgreSQL, REST APIs, Docker, JWT.',
    'about.skill3.title': 'Embedded Systems',
    'about.skill3.desc': 'Experience with microcontrollers (BitDogLab and Raspberry Pi Pico), C/C++ development for hardware.',
    
    'projects.title': 'Recent Projects',
    'projects.code': 'Code',
    'projects.deploy': 'View Deploy',

    'proj.entrelinhas.title': 'Entre Linhas',
    'proj.entrelinhas.desc': 'A full-stack web application for a small textile / handmade goods business',
    
    'proj.luminus.title': 'Luminus',
    'proj.luminus.desc': 'A full-stack academic dossier management system',
    
    'proj.pbljava.title': 'TickIt',
    'proj.pbljava.desc': 'A desktop ticket sales system',
    
    'proj.games.title': 'Games Emulator',
    'proj.games.desc': 'An embedded software project implementing a mini console with games like flappy bird and tic-tac-toe using BitDogLab',

    'proj.notificacoes.title': 'Ecomp Notifications',
    'proj.notificacoes.desc': 'Smart notifications system for the Computer Engineering course at UEFS',

    'proj.escalonador.title': 'OS Scheduler',
    'proj.escalonador.desc': 'Process scheduler developed in operating systems course.',

    'proj.readme.title': 'README',
    'proj.readme.desc': 'Repository focused on my GitHub profile, where I present an overview of myself and my skills through the README.',

    'footer.desc': 'Software Developer building innovative and intelligent solutions.',
    'footer.rights': 'Daniel Lucas Rios da Silva'
  }
};
