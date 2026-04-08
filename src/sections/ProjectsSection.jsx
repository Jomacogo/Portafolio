import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { projects } from "../constants/projects";
import "./ProjectsSection.css";

function ProjectCard({ project, showDemo, onImageClick }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Card className="project-card">
      <div className="project-image-container">
        <img
          src={project.images[currentImage]}
          alt={project.name}
          className="project-image"
          loading="lazy"
          onClick={() => onImageClick(project, currentImage)}
        />
        <div className="project-overlay">
          <div className="project-screenshots">
            {project.images.slice(0, 3).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className={`screenshot-thumb ${currentImage === idx ? "active" : ""}`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {showDemo && project.demo && (
            <Button href={project.demo} variant="primary">
              Demo
            </Button>
          )}
          {project.github && (
            <Button href={project.github} variant={showDemo && project.demo ? "secondary" : "primary"}>
              Repositorio
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function ProjectsSection() {
  const [modal, setModal] = useState({ open: false, project: null, imageIndex: 0 });

  const openModal = (project, imageIndex) => {
    setModal({ open: true, project, imageIndex });
  };

  const closeModal = () => {
    setModal({ open: false, project: null, imageIndex: 0 });
  };

  const nextImage = () => {
    if (modal.project) {
      setModal((prev) => ({
        ...prev,
        imageIndex: (prev.imageIndex + 1) % prev.project.images.length,
      }));
    }
  };

  const prevImage = () => {
    if (modal.project) {
      setModal((prev) => ({
        ...prev,
        imageIndex:
          (prev.imageIndex - 1 + prev.project.images.length) % prev.project.images.length,
      }));
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-label">Proyectos</span>
          <h2 className="section-title">Trabajo seleccionado</h2>
        </div>

        <div className="projects-category">
          <h3 className="category-title">Aplicaciones Web</h3>
          <div className="projects-grid">
            {projects.web.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                showDemo={true}
                onImageClick={openModal}
              />
            ))}
          </div>
        </div>

        <div className="projects-category">
          <h3 className="category-title">Aplicaciones de Escritorio</h3>
          <div className="projects-grid">
            {projects.desktop.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                showDemo={false}
                onImageClick={openModal}
              />
            ))}
          </div>
        </div>
      </div>

      {modal.open && modal.project && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <button className="modal-nav modal-prev" onClick={prevImage}>
              &#10094;
            </button>
            <img
              src={modal.project.images[modal.imageIndex]}
              alt={`${modal.project.name} screenshot`}
              className="modal-image"
            />
            <button className="modal-nav modal-next" onClick={nextImage}>
              &#10095;
            </button>
            <div className="modal-info">
              <span className="modal-title">{modal.project.name}</span>
              <span className="modal-counter">
                {modal.imageIndex + 1} / {modal.project.images.length}
              </span>
            </div>
            <div className="modal-thumbnails">
              {modal.project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`modal-thumb ${modal.imageIndex === idx ? "active" : ""}`}
                  onClick={() => setModal((prev) => ({ ...prev, imageIndex: idx }))}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
