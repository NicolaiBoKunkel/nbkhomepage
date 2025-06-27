'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="text-white bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900 px-3 py-1 rounded transition text-sm"
    >
      {theme === 'light' ? '🌙 Mørk tilstand' : '☀️ Lys tilstand'}
    </button>
  );
}
