import Button from "../components/Button";
import { personalInfo } from "../constants/personalInfo";
import "./ContactSection.css";

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Jose, me gustaría ponerme en contacto contigo.");
    window.open(
      `https://wa.me/573107061769?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="contact-header">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Hablemos</h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? 
            No dudes en contactarme.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">{personalInfo.email}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-label">WhatsApp</span>
                <span className="contact-value">{personalInfo.phone}</span>
              </div>
            </div>
          </div>
          <div className="contact-actions">
            <Button variant="primary" onClick={handleEmailClick}>
              Enviar Email
            </Button>
            <Button variant="secondary" onClick={handleWhatsAppClick}>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
