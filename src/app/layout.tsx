import type { Metadata } from 'next';
import './globals.css';

import { Inter, JetBrains_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { tagline, titleWithRoles } from '@/lib/content';

// Inter carries prose only. JetBrains Mono carries display and metadata —
// the mono headline is the identity move, so it loads with the page.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-display',
  weight: ['400', '700'],
  display: 'swap',
});

const DEFAULT_THEME = 'dark';

// Kept as a string so it can be inlined verbatim into <head>. localStorage can
// throw when site data is blocked, so failures fall back to the default theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.add(t==='light'||t==='dark'?t:'${DEFAULT_THEME}')}catch(e){document.documentElement.classList.add('${DEFAULT_THEME}')}})()`;

const SITE_URL = 'https://surajpathak.com.np';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Suraj Pathak',
  description: tagline,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Suraj Pathak',
    title: titleWithRoles,
    description: tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: titleWithRoles,
    description: tagline,
  },
};

// Person schema so search engines can attribute the page to a real identity
// and link out to verified profiles (helps knowledge-panel construction).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Suraj Pathak',
  url: SITE_URL,
  jobTitle: 'Software Engineer',
  description: tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressCountry: 'Nepal',
  },
  sameAs: [
    'https://github.com/the-sp',
    'https://www.linkedin.com/in/surajpathak-eng',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${mono.variable}`}>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main className="pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
