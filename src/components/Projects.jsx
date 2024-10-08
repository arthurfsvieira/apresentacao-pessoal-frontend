import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Sistema de Cotação de Seguros', link: '#' },
    { name: 'Página de Flexbox para Estudo', link: '#' },
    { name: 'Interações com JavaScript', link: '#' }
  ];

  return (
    <section>
      <h2>Projetos Recentes</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link}>{project.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
