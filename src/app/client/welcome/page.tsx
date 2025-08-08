'use client';

import { usePortfolioUI } from '@/app/hooks/usePortfolioUI';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import Portfolio from './components/Portfolio';

export default function WelcomePage() {
  const {
    theme,
    showGoTop,
    isHeaderActive,
    isNavOpen,
    toggleNav,
    toggleTheme,
    skillsTab,
    toggleSkillsTab,
  } = usePortfolioUI();

  return (
    <>
      <Header
        theme={theme}
        isHeaderActive={isHeaderActive}
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills skillsTab={skillsTab} toggleSkillsTab={toggleSkillsTab} />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      {showGoTop && <GoTop />}
    </>
  );
}
