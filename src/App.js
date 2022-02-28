import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import React from "react";
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';

function App() {

  return (
    <>
      <Home />
      <Buttons />
      <Projects />
      <div className="grid grid-cols-1 md:grid-cols-2">

        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
