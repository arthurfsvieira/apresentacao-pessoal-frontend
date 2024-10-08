
import './App.css'
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <SocialLinks/>
    </div>
  );
}

export default App
