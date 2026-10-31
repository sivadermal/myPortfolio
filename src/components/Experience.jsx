import { useState } from 'react';
import { duties } from '../data';

const cats = ['Lead', 'Build', 'Maintain', 'Tools'];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('Lead');

  const filtered = duties.filter(d => d[0] === activeFilter);
  const total = duties.length;

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-kicker">CAREER</div>
        <h2>Experience</h2>
        <div className="role-head">
          <h3>Sr. Software Developer cum Team Lead, Olivo Technologies</h3>
          <span>Aug 2023 to present</span>
        </div>
        <div className="seg" role="group" aria-label="Filter responsibilities">
          {cats.map(c => (
            <button
              key={c}
              type="button"
              data-c={c}
              aria-pressed={activeFilter === c}
              onClick={() => setActiveFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="count" aria-live="polite">
          showing {filtered.length} of {total}
        </p>
        <ul className="duties">
          {duties.map((d, i) => (
            <li
              key={i}
              data-c={d[0]}
              hidden={d[0] !== activeFilter}
            >
              <span className="cat">{d[0].toLowerCase()}</span>
              {d[1]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

