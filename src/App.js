import React, { useEffect, useState } from "react";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import logo from './images/Logo.png'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* {loading === false ? (
        <div>
          <Home />
          <Buttons />
          <Projects />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <About />
            <Contact />
          </div>
          <Footer />
        </div>
      ) : ( */}
      <div className="h-screen">
        <div className="bg-blen h-screen items-center justify-center px-4 py-5 flex over:opacity-100 ">
          <div className="flex align-items">
            <div to="/#home" className="text-slate-400 justify-center text-center text-big w-bb h-bb rounded-full border-8 border-slate-400 border:rounded-full focus:border-slate-400 focus:text-slate-400 ">
              B
            </div>
            {/* <img src={logo} alt="B logo" /> */}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default App;
