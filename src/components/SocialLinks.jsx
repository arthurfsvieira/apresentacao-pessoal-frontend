import React from 'react';

const SocialLinks = () => {
  return (
    <section className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">Connect with me</h2>
      <ul className="flex justify-center space-x-6">
        <li><a href="https://linkedin.com/in/arthur-vieira-dev/" className="text-blue-700 hover:underline">LinkedIn</a></li>
        <li><a href="https://github.com/arthurfsvieira/" className="text-gray-400 hover:underline">GitHub</a></li>
        <li><a href="mailto:arthur.devbr@gmail.com" className="text-red-500 hover:underline">Gmail</a></li>
      </ul>
    </section>
  );
}

export default SocialLinks;
