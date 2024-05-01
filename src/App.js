import React, { useEffect, useState } from "react";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects3';
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Icons from "./components/Icons/Icons"
// import { Routes, Route } from "react-router-dom";
// import Plumbing from "./components/PlumbingApp/Plumbing.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  console.log(loading)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>

      <div>
        {/* <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/plumbing" element={<Plumbing />} />
        </Routes> */}
        <Home />
        <Projects />
        <Buttons />
        <Icons />
        <div className="grid grid-cols-1 bg-cover">
          <About />
          <Contact />
        </div>

        <Footer />
      </div>

    </>
  );
}

export default App;
