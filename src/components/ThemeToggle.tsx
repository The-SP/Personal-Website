'use client';

import { Moon, Sun } from 'lucide-react';
import React from 'react';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {/*
        The server can't know the stored preference, so both icons are always
        rendered and CSS picks one via the <html> class. This keeps server and
        client markup identical while still respecting the saved theme on the
        very first paint.
      */}
      <Sun
        aria-hidden
        className="hidden dark:block h-5 w-5 text-yellow-500 transition-transform duration-200 hover:rotate-180"
      />
      <Moon
        aria-hidden
        className="block dark:hidden h-5 w-5 text-gray-700 transition-transform duration-200 hover:rotate-12"
      />
    </Button>
  );
};

export default ThemeToggle;
