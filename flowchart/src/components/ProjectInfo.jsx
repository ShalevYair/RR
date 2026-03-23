import { useState } from "react";
import info from "../data/projectInfo.json";

function Section({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="info-section">
      <button className="info-section-toggle" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`info-chevron ${open ? "open" : ""}`}>›</span>
      </button>
      {open && <div className="info-section-body">{children}</div>}
    </div>
  );
}

export default function ProjectInfo() {
  return (
    <div className="project-info">
      <div className="project-info-header">
        <h2>{info.module.title}</h2>
        <p>{info.module.subtitle}</p>
        <p className="project-info-desc">{info.module.description}</p>
      </div>

      <Section title="מהו פרויקט ערבה?">
        <p className="info-summary">{info.arava.summary}</p>

        <div className="info-goals">
          {info.arava.goals.map((goal) => (
            <div key={goal.title} className="info-goal-card">
              <strong>{goal.title}</strong>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>

        <div className="info-box problem">
          <strong>הבעיה</strong>
          <p>{info.arava.problem}</p>
        </div>
        <div className="info-box solution">
          <strong>הפתרון</strong>
          <p>{info.arava.solution}</p>
        </div>
      </Section>

      <Section title="מהי הוראת רישום?">
        <p className="info-summary">{info.registrationInstruction.summary}</p>

        <ul className="info-details">
          {info.registrationInstruction.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className="info-standards">
          {info.registrationInstruction.standardsSupported.map((s) => (
            <div key={s.name} className="info-standard-card">
              <strong>{s.name}</strong>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
