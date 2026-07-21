'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#skills' },
  { name: 'Work', href: '#projects' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#about" className="font-mono text-sm font-bold tracking-tight">
          suraj<span className="text-signal">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3 py-2 font-mono text-xs tracking-wider uppercase text-muted transition-colors hover:text-signal"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="btn-pill ml-1 h-8 w-8 justify-center md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <ul
          id="mobile-nav"
          className="border-t border-rule bg-background px-6 py-2 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 font-mono text-xs tracking-wider uppercase text-muted transition-colors hover:text-signal"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
