import { personalInfo } from "../constants/personalInfo";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-header">
          <span className="section-label">Sobre mí</span>
          <h2 className="section-title">Conoce mi historia</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">{personalInfo.description}</p>
            <p>
              Como estudiante de Ingeniería Informática, me especializo en el desarrollo
              de aplicaciones web modernas. Tengo experiencia en la creación de sistemas
              de gestión, páginas corporativas y aplicaciones interactivas.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas
              y resolver problemas reales con soluciones tecnológicas efectivas.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Ubicación</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{personalInfo.email}</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Tecnologías dominadas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
