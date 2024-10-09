import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Insurance Quotation System', link: 'https://github.com/arthurfsvieira/cotacao-seguros' },
    { name: 'Responsive Hero Cards', link: 'https://github.com/arthurfsvieira/hero-cards' },
    { name: 'Pizza Cart with JS', link: 'https://github.com/arthurfsvieira/pizza_base' }
  ];

  return (
    <section className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">Recent Projects</h2>
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
