import { SkillCategory, Goal } from "../data/phases";

interface PhaseProps {
  title: string;
  duration: string;
  skillCategories: SkillCategory[];
  goals: Goal[];
}

export default function Phase({ title, duration, skillCategories, goals }: PhaseProps) {
  return (
    <div className="phase">
      <div className="phase-marker"></div>
      <div className="phase-content">
        <div className="phase-title">
          {title}
          <span className="phase-duration">{duration}</span>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category priority-${category.priority}`}>
              <h4>{category.title}</h4>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="goals-section">
          <h3>📋 この期間の目標</h3>
          {goals.map((goal, index) => (
            <div key={index} className="goal-item">
              {goal.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
