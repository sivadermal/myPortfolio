import { projects, byId } from '../data';

function smooth() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export default function Projects({ onTagClick }) {
  const handleTagClick = (nodeId) => {
    if (onTagClick) onTagClick(nodeId);
    // scroll to stack
    const stackEl = document.getElementById('stack');
    if (stackEl) stackEl.scrollIntoView({ behavior: smooth(), block: 'start' });
  };

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-kicker">SELECTED WORK</div>
        <h2>Projects</h2>
        <p className="intro">
          Each project lists the parts of the stack it uses. Select one to see it in the diagram above.
        </p>
        <ul className="proj" id="projList">
          {projects.map((p) => (
            <li key={p.n}>
              <h3>{p.n}</h3>
              <div>
                <p>{p.d}</p>
                <div className="tags">
                  {p.s.map(s => {
                    const node = byId(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        className={`tag t${node.g}`}
                        data-id={s}
                        onClick={() => handleTagClick(s)}
                      >
                        {node.n}
                      </button>
                    );
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

