import React from 'react';

const SocialLinks = () => {
  return (
    <section className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">Conecte-se Comigo</h2>
      <ul className="flex justify-center space-x-6">
        <li><a href="https://linkedin.com/in/seu-linkedin" className="text-blue-700 hover:underline">LinkedIn</a></li>
        <li><a href="https://github.com/seu-github" className="text-gray-800 hover:underline">GitHub</a></li>
        <li><a href="mailto:seu-email" className="text-red-500 hover:underline">Email</a></li>
      </ul>
    </section>
  );
}

export default SocialLinks;
