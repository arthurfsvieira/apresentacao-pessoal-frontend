import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'PHP', 'HTML', 'CSS', 'MySQL'];

  return (
    <section className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">Habilidades</h2>
      <ul className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-100 py-2 rounded-lg shadow">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
