'use client';

import { Moon, Sun } from 'lucide-react';
import React from 'react';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-200 hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700 transition-transform duration-200 hover:rotate-12" />
      )}
    </Button>
  );
};

export default ThemeToggle;
