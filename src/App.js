import Navbar from './components/Nav/Nav';
import Home from './Home/Home';
import { useRef } from 'react';
import Projects from './components/Projects/Projects';
import React from "react";
import { Link } from "react-router-dom";


function App() {

  const scrollToRef = useRef();

  return (
    <>
      <button onClick={() => scrollToRef.current.scrollIntoView()}>
        Scroll
      </button>
      <div ref={scrollToRef}>
        <Home />
      </div>

      <Projects />

    </>
  );
}

export default App;
