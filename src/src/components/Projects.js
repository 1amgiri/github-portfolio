import React from 'react';
import { projects } from '../src/data';

const Projects = () => (
  <section className="container my-5">
    <h2>Projects</h2>
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-6 mb-4" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
