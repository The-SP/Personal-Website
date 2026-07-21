'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

// useLayoutEffect logs a warning when run on the server; the provider only
// needs the pre-paint timing in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark',
}) => {
  // Read the class the inline <head> script already applied, rather than
  // localStorage directly. Both describe the same preference, but the class is
  // what the document was painted with, so the first client render agrees with
  // the DOM and no consumer of `theme` can hydrate against a stale value.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    return document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark';
  });

  // Single owner of both the <html> class and persistence, so every state
  // change syncs the same way and there is no imperative duplicate path.
  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be unavailable (private mode, blocked site data). The
      // theme still applies for this session; it just will not persist.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
