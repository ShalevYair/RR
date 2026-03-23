import { useState } from "react";
import SubStages from "./SubStages";

export default function StageCard({ stage }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="stage-block">
      <div
        className={`stage-card ${expanded ? "expanded" : ""}`}
        onClick={() => setExpanded(!expanded)}
        style={{ "--stage-color": stage.color }}
      >
        <div className="stage-number-circle" style={{ backgroundColor: stage.color }}>
          {stage.id}
        </div>
        <div className="stage-content">
          <div className="stage-top-row">
            <span className="stage-icon">{stage.icon}</span>
            <h2 className="stage-title">{stage.title}</h2>
            <span className={`stage-chevron ${expanded ? "open" : ""}`}>‹</span>
          </div>
          <p className="stage-description">{stage.description}</p>
        </div>
      </div>

      <div className={`substages-panel ${expanded ? "open" : ""}`}>
        {expanded && <SubStages subStages={stage.subStages} parentColor={stage.color} />}
      </div>
    </div>
  );
}
