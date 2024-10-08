import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Sistema de Cotação de Seguros', link: '#' },
    { name: 'Página de Flexbox para Estudo', link: '#' },
    { name: 'Interações com JavaScript', link: '#' }
  ];

  return (
    <section className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">Projetos Recentes</h2>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} className="text-blue-500 hover:underline">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
