import Phase from "./components/Phase";
import { phases } from "./data/phases";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>🚀 フリーランスWeb開発者への道程</h1>
        <p>現在25歳・Web開発経験1年 → 独立フリーランスまでの成長ロードマップ</p>
      </div>

      <div className="timeline">
        {phases.map((phase, index) => (
          <Phase key={index} title={phase.title} duration={phase.duration} skillCategories={phase.skillCategories} goals={phase.goals} />
        ))}
      </div>
    </div>
  );
}
