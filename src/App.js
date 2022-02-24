import Navbar from './components/Nav/Nav';
import Home from './Home/Home';
import { useRef } from 'react';
import Projects from './components/Projects/Projects';
import React from "react";
import { Link } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons'


function App() {

  const scrollToRef = useRef();

  return (
    <>
      <div className="bg-waves" ref={scrollToRef}>
        <Home />
      </div>
      <Buttons />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
