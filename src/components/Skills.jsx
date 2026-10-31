import { skills, skillMap } from '../data';

function smooth() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export default function SkillsSection({ onSkillClick }) {
  const handleSkillClick = (nodeId) => {
    if (onSkillClick) onSkillClick(nodeId);
    const stackEl = document.getElementById('stack');
    if (stackEl) stackEl.scrollIntoView({ behavior: smooth(), block: 'start' });
  };

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-kicker"> TOOLKIT</div>
        <h2>Technical skills</h2>
        <p className="intro">
          Underlined skills open the part of the stack diagram where I used them.
        </p>
        <div className="skills" id="skillGrid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map(item => (
                  <li key={item}>
                    {skillMap[item] ? (
                      <button
                        type="button"
                        data-id={skillMap[item]}
                        onClick={() => handleSkillClick(skillMap[item])}
                      >
                        {item}
                      </button>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

