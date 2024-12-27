import React from "react";
import Hero from "../components/Hero";
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'


function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;
