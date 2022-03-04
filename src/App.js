import React, { useEffect, useState } from "react";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css'
import Loader from "./components/Loader/Loader";

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
        <Loader />
      )}
    </>
  );
}

export default App;
