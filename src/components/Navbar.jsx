import { useEffect, useRef } from 'react';

const SunIcon = () => (
  <svg className="theme-icon" viewBox="0 0 24 24" width="19" height="19"
    fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg className="theme-icon" viewBox="0 0 24 24" width="19" height="19"
    fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>
  </svg>
);

export default function Navbar({ theme, toggleTheme }) {
  const navRef = useRef(null);

  // Active section observer
  useEffect(() => {
    const navLinks = navRef.current
      ? [...navRef.current.querySelectorAll('a')]
      : [];
    const sections = navLinks
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          navLinks.forEach(link => {
            const active = link.getAttribute('href') === '#' + entry.target.id;
            link.setAttribute('aria-current', active ? 'location' : 'false');
          });
        });
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  console.log("ssss", isDark)

  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">Sivadath G</a>
        {/* <button
          id="theme"
          type="button"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button> */}
        <nav aria-label="Sections" ref={navRef}>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

