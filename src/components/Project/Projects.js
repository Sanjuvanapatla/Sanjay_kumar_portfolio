import React from 'react';
import './Projects.css';
import projectsData from './projectsData';
import FloatingScreen from './FloatingScreen';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {/* Map through projectsData to create FloatingScreen components */}
        {projectsData.map(project => (
          <FloatingScreen
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            titleLink={project.titleLink}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;