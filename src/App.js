import React, { useEffect, useState } from "react";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading === false ? (
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
      ) : (
        <div className="h-screen">
          <div className="bg-blen h-screen items-center justify-center px-4 pt-24 over:opacity-100 ">
            <div className="align-items">
              <div className="text-slate-50 grid justify-center text-big ">
                <div className="loadingScreen">B</div>

                <div className="loadingLetter text-center text-2xl">
                  <div className="text-2xl flex">
                    Loading
                    <div className="element">.</div>
                    <div className="element2">.</div>
                    <div className="element3">.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
