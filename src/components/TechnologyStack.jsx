import { useRef } from 'react';
import { groups, nodes, byId } from '../data';

function smooth() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export default function TechnologyStack({ selected, onPick, detailRef }) {
  const selectedNode = byId(selected);

  const handleNodeClick = (id) => {
    if (onPick) onPick(id);
    // On mobile, scroll to the detail panel
    if (window.matchMedia('(max-width: 820px)').matches) {
      setTimeout(() => {
        if (detailRef && detailRef.current) {
          detailRef.current.scrollIntoView({ behavior: smooth(), block: 'center' });
        }
      }, 0);
    }
  };

  return (
    <section id="stack">
      <div className="wrap">
        <div className="stack-heading">
          <div>
            <div className="section-kicker"> ENGINEERING APPROACH</div>
            <h2>How my stack fits together</h2>
            <p className="intro">
              From interface to integrations — explore the technologies behind the products I build.
            </p>
          </div>
          <div className="stack-note">SELECT A COMPONENT TO EXPLORE</div>
        </div>

        <div className="flow" id="flow">
          {groups.map((g, i) => (
            <div key={g} className={`col g${i}`}>
              <h3>{g}</h3>
              <div className="nodes">
                {nodes
                  .filter(n => n.g === i)
                  .map(n => (
                    <button
                      key={n.id}
                      type="button"
                      className="node"
                      aria-pressed={String(selected === n.id)}
                      onClick={() => handleNodeClick(n.id)}
                    >
                      {n.n}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {selectedNode && (
          <div
            className={`detail d${selectedNode.g}`}
            id="detail"
            aria-live="polite"
            ref={detailRef}
          >
            <h3>{selectedNode.n}</h3>
            <p>{selectedNode.t}</p>
            <p className="meta">used in: {selectedNode.u}</p>
          </div>
        )}
      </div>
    </section>
  );
}
