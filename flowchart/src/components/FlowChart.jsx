import { stages } from "../data/stages";
import StageCard from "./StageCard";
import ProjectInfo from "./ProjectInfo";

export default function FlowChart() {
  return (
    <div className="flowchart">
      <header className="flowchart-header">
        <h1>תהליך הנפקת הוראת רישום כללית</h1>
        <p>פרויקט ערבה — משרד התחבורה, אגף הרכב ושירותי תחזוקה</p>
      </header>

      <ProjectInfo />

      <div className="stages-list">
        {stages.map((stage, index) => (
          <div key={stage.id}>
            <StageCard stage={stage} />
            {index < stages.length - 1 && (
              <div className="stage-connector">
                <svg width="4" height="40" viewBox="0 0 4 40">
                  <line
                    x1="2" y1="0" x2="2" y2="40"
                    stroke="#CBD5E1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="2" cy="40" r="2" fill="#CBD5E1" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="flowchart-footer">
        <p>מודול הוראות רישום — פרויקט ערבה</p>
      </footer>
    </div>
  );
}
