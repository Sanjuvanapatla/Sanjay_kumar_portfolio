import React from 'react';
import './Hero.css'; // if styling is needed



const Hero = () => {
  return (
    <section className="hero">
      <h1>Vanapatla Sanjay Kumar</h1>
      <p>FullStack Web Developer</p>
      <div className="hero-buttons">
        <a href='#about' className='ab-1'><button>About</button></a> 
        <a href="#projects" className='pj-1'><button>Projects</button></a>
       <a href="#contact" className='ct-1'><button>Contact</button></a>
        </div>
    </section>
  );
};

export default Hero;

