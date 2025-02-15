import { skillInfo } from '../types/skillInfo';
import FloatingInView from './FloatingInView';
import { getCssRootVar, openLinkInNewTab } from '../functions/helpers';

interface skillCardProps {
  skillInfo: skillInfo;
}

export default function SkillCard({ skillInfo }: skillCardProps) {
  return (
    <FloatingInView threshold={0.8}>
      <div
        className="skill-card"
        id={skillInfo.title}
        onClick={() =>
          openLinkInNewTab(`https://www.google.com/search?q=What+is+${skillInfo.title}?`)
        }
      >
        <header>
          <h3>{skillInfo.title}</h3>
        </header>
        <span style={{ color: getCssRootVar('--alt') }}>{skillInfo.icon}</span>
      </div>
    </FloatingInView>
  );
}
