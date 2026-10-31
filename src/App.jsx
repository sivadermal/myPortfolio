import { useState, useRef, useCallback, useEffect } from 'react';
import './styles/global.css';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import TechnologyStack from './components/TechnologyStack';
import Projects      from './components/Projects';
import Experience    from './components/Experience';
import SkillsSection from './components/Skills';
import Awards        from './components/Awards';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

function getInitialTheme() {
  // Check if a preference is stored
  const stored = document.documentElement.dataset.theme;
  if (stored) return stored;
  // Respect system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [stackSelected, setStackSelected] = useState('client');
  const detailRef = useRef(null);

  // Apply theme to <html> element
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handlePickNode = useCallback((id) => {
    setStackSelected(id);
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <TechnologyStack
          selected={stackSelected}
          onPick={handlePickNode}
          detailRef={detailRef}
        />
        <Projects onTagClick={handlePickNode} />
        <Experience />
        <SkillsSection onSkillClick={handlePickNode} />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
