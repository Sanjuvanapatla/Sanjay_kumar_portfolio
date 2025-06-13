// src/App.js
import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import './App.css'; // Import your main CSS file

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
