import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'PHP', 'HTML', 'CSS', 'SQL'];
  const colors = ['bg-yellow-500', 'bg-sky-500', 'bg-purple-500', 'bg-orange-500', 'bg-blue-500', 'bg-green-500']; // Cores diferentes

  return (
    <section className="max-w-3xl mx-auto text-center py-10 px-2">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className={`${colors[index % colors.length]} py-2 rounded-full text-white font-bold drop-shadow-md`}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;