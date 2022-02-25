import Navbar from './components/Nav/Nav';
import Home from './Home/Home';
import Projects from './components/Projects/Projects';
import React from "react";
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';

function App() {

  return (
    <>
      <Home />
      <Buttons />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
