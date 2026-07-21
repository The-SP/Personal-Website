'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/theme-provider';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-pill ml-1 h-8 gap-2 px-2 md:px-2.5"
      aria-label="Toggle theme"
    >
      {/*
        The server can't know the stored preference, so both states render and
        CSS picks one via the <html> class. Server and client markup stay
        identical while still honouring the saved theme on first paint.
        Each label names the theme the click switches *to*, and is hidden below
        md where the navbar needs the horizontal space.
      */}
      <span aria-hidden className="hidden items-center gap-2 dark:inline-flex">
        <Sun className="h-3.5 w-3.5" />
        <span className="hidden md:inline">Light</span>
      </span>
      <span aria-hidden className="inline-flex items-center gap-2 dark:hidden">
        <Moon className="h-3.5 w-3.5" />
        <span className="hidden md:inline">Dark</span>
      </span>
    </button>
  );
};

export default ThemeToggle;
