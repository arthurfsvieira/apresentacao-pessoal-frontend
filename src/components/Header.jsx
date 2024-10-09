import React from "react";

const Header = () => {
  return (
    <header className="h-screen text-center md:text-left py-10 text-black md:text-white opacity-80 bg-cover bg-center bg-[url(..\src\images\arthur-portifolio.png)] md:bg-none md:flex md:items-center md:justify-between md:px-20 md:bg-gray-800">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-2 md:text-5xl">Arthur Vieira</h1>
        <p className="text-xl md:text-2xl">Software Developer</p>
      </div>

      <div className="md:w-1/2 md:flex md:justify-end">
        <img
          src="..\src\images\arthur-portifolio.png"
          alt="Arthur Vieira"
          className="hidden md:block w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-2xl"
        />
      </div>
    </header>
  );
};

export default Header;
