import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'PHP', 'HTML', 'CSS', 'MySQL'];

  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
