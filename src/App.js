import React, { useEffect, useState } from "react";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

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
        <div className="z-10">
          <div className="bg-blen h-screen px-4 py-4 flex over:opacity-100 ">
            <div className="flex">
              <div className="text-slate-400 ml-1 text-4xl logo border-2 border-slate-400 hover:border-rose-700 circle fixed">B</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
