import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import React from "react";
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Home />
      <Buttons />
      <Projects />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
