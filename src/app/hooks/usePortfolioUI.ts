'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark-theme' | 'light-theme';
type SkillsTab = 'skills' | 'tools';

export const usePortfolioUI = () => {
  const [theme, setTheme] = useState<Theme>('dark-theme');
  const [showGoTop, setShowGoTop] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [skillsTab, setSkillsTab] = useState<SkillsTab>('skills');

  // --- Тема (из localStorage) ---
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  // --- Скролл: активировать header и GoTop ---
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderActive(scrollY >= 10);
      setShowGoTop(scrollY >= 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // --- Навигация (бургер-меню) ---
  const toggleNav = () => {
    if (window.innerWidth < 990) {
      setIsNavOpen((prev) => !prev);
      document.body.classList.toggle('active');
    }
  };

  // --- Skills toggle ---
  const toggleSkillsTab = () => {
    setSkillsTab((prev) => (prev === 'skills' ? 'tools' : 'skills'));
  };

  const scrollToSection = (id: string) => {
    console.log(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    theme,
    toggleTheme,
    isHeaderActive,
    showGoTop,
    isNavOpen,
    toggleNav,
    skillsTab,
    toggleSkillsTab,
    scrollToSection,
  };
};
