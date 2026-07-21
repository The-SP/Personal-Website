import type { Metadata } from 'next';
import './globals.css';

import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

const DEFAULT_THEME = 'dark';

// Kept as a string so it can be inlined verbatim into <head>. localStorage can
// throw when site data is blocked, so failures fall back to the default theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.add(t==='light'||t==='dark'?t:'${DEFAULT_THEME}')}catch(e){document.documentElement.classList.add('${DEFAULT_THEME}')}})()`;

export const metadata: Metadata = {
  title: 'Suraj Pathak - Portfolio',
  description: 'Personal Website of Suraj Pathak',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Runs before first paint, so the stored preference is applied to
          <html> while the document is still parsing. Without this the browser
          paints the server markup first and a non-default theme flashes.
        */}
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
