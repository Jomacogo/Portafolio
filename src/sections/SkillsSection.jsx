import { skills } from "../constants/skills";
import "./SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="skills-header">
          <span className="section-label">Habilidades</span>
          <h2 className="section-title">Tecnologías que domino</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--progress": `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
