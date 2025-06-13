import React from 'react';
import './About.css';
import FloatingAvatar from './FloatingAvatar';

const About = () => {
  return (
    <section id="about" className="about">
      <FloatingAvatar/>
      <h2>About Me</h2>
      <p>I’m an aspiring Full Stack Developer passionate about building scalable, user-friendly web applications. With hands-on experience using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Python, I specialize in both frontend and backend development. I enjoy solving real-world problems through clean, efficient code and take pride in creating responsive interfaces using React, Tailwind CSS, and modern design principles. I'm currently enhancing my skills through the CCBP 4.0 Full Stack Intensive Program and contributing to live projects, including chat applications, eCommerce platforms, and generative AI tools.</p>
    </section>
  );
};

export default About;