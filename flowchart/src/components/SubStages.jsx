import { useState } from "react";

const actorColors = {
  "יבואן": "#4A90D9",
  "מערכת": "#95A5A6",
  "מערכת + יבואן": "#5DADE2",
  "מהנדס תקינה": "#E67E22",
  "ועדה מקצועית": "#C0392B",
  "מהנדס היבואן": "#8E44AD",
  "מנהל תחום תקינה": "#C0392B",
  "מחלקת יבוא": "#16A085",
  "בוחן מוסמך": "#27AE60",
  "תחנת טסט": "#F39C12",
};

export default function SubStages({ subStages, parentColor }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="substages-container">
      {subStages.map((sub, index) => (
        <div key={sub.id} className="substage-wrapper">
          {index > 0 && (
            <div className="substage-connector">
              <svg width="2" height="24" viewBox="0 0 2 24">
                <line x1="1" y1="0" x2="1" y2="24" stroke={parentColor} strokeWidth="2" strokeDasharray="4 3" />
              </svg>
            </div>
          )}
          <div
            className={`substage-card ${hoveredId === sub.id ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredId(sub.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ "--accent": parentColor }}
          >
            <div className="substage-header">
              <span className="substage-number">{sub.id}</span>
              <span className="substage-title">{sub.title}</span>
              <span
                className="substage-actor"
                style={{ backgroundColor: actorColors[sub.actor] || "#95A5A6" }}
              >
                {sub.actor}
              </span>
            </div>
            <div className="substage-description">{sub.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
