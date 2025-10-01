import React, { useState } from 'react';
import proj1 from '../../image/cert-1.jpg';
import proj2 from '../../image/cert-2.jpg';
import proj3 from '../../image/cert-3.jpg';
import proj4 from '../../image/cert-4.jpg';
import proj5 from '../../image/cert-5.jpg';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    { 
      src: proj4, 
      alt: "Top 5 Earner", 
      title: "Top 5 Earner", 
      type: "Frontrow", 
      link: ""  
    },
    { 
      src: proj5, 
      alt: "Top 3 Seller of the Month", 
      title: "Top 3 Seller of the Month", 
      type: "Frontrow", 
      link: ""  
    },
    { 
      src: proj3, 
      alt: "Prompt Engineering with AI Models", 
      title: "Prompt Engineering with AI Models", 
      type: "AI Certificate", 
      link: ""  
    },
    { 
      src: proj1, 
      alt: "Virtual Executive Assistant", 
      title: "Virtual Executive Assistant", 
      type: "Professional Diploma", 
      link: ""  
    },
    { 
      src: proj2, 
      alt: "Top 7 Earner", 
      title: "Top 7 Earner", 
      type: "Frontrow", 
      link: ""  
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container">
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="card">
            <figure className="card-banner img-holder" style={{ '--width': '334', '--height': '180' }}>
              <img src={project.src} alt={project.alt} className="img-cover" width="334" height="180" />
            </figure>
            <div className="card-content">
              <span className="label-large card-subtitle">{project.type}</span>
              <h3 className="title-large card-title">{project.title}</h3>
            </div>
            <button 
              className="state-layer" 
              onClick={() => openModal(project)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <img 
              src={selectedProject.src} 
              alt={selectedProject.alt} 
              className="modal-image"
            />
            <div className="modal-info">
              <h3 className="title-large">{selectedProject.title}</h3>
              <span className="label-large">{selectedProject.type}</span>
            </div>
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default Projects;