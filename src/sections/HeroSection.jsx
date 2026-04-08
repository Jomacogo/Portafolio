import { useState, useEffect } from "react";
import Button from "../components/Button";
import { personalInfo } from "../constants/personalInfo";
const perfilImage = "/assets/foto_perfil/perfil-jose.png";
import "./HeroSection.css";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeProgress = Math.min(scrollY / 400, 1);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-container">
        <div 
          className="hero-profile-bg"
          style={{
            backgroundImage: `url(${perfilImage})`,
            opacity: 1 - fadeProgress * 0.7,
            transform: `scale(${1 + fadeProgress * 0.15})`,
          }}
        />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-profile">
          <div className="profile-image-wrapper">
            <img
              src={perfilImage}
              alt={personalInfo.name}
              className="profile-image"
            />
            <div className="profile-ring" />
            <div className="profile-glow" />
          </div>
        </div>

        <span className="hero-badge">¡Hola! Bienvenido</span>
        <h1 className="hero-title">
          Soy <span className="hero-highlight">{personalInfo.name}</span>
        </h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <p className="hero-description">{personalInfo.description}</p>
        <div className="hero-buttons">
          <Button variant="primary" onClick={scrollToProjects}>
            Ver Proyectos
          </Button>
          <Button variant="secondary" onClick={scrollToContact}>
            Contáctame
          </Button>
        </div>
      </div>
    </section>
  );
}
