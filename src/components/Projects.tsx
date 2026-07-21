'use client';

import { useState } from 'react';

import Image from 'next/image';

import SectionHeader from '@/components/SectionHeader';

// Shown before the reader opts into the rest; the remainder stays in the DOM
// so it is still indexable and reachable by find-in-page.
const INITIAL_COUNT = 3;

const projects = [
  {
    title: 'Hire Nepal',
    summary:
      'Job portal with an applicant ranking system that parses resumes and scores them against a job description. Includes recommendations plus resume and cover-letter tooling.',
    image: '/images/projects/job.png',
    tools: ['React', 'Django REST', 'spaCy'],
    links: {
      github: 'https://github.com/The-SP/Job-Portal-Frontend',
      live: null,
      youtube: 'https://youtu.be/T3Hj6fBOIFk',
    },
  },
  {
    title: 'ChatVerse',
    summary:
      'Realtime messaging over WebSockets, with AI-generated summaries of chat history.',
    image: '/images/projects/chatverse.png',
    tools: ['FastAPI', 'Next.js', 'WebSockets', 'LangChain'],
    links: {
      github: 'https://github.com/The-SP/ChatVerse',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Receipt-AI',
    summary:
      'Parses receipt images into structured data using the Gemini API, behind rate-limited endpoints.',
    image: '/images/projects/receipt-ai.png',
    tools: ['FastAPI', 'Next.js', 'LangChain', 'Gemini API', 'Redis'],
    links: {
      github: 'https://github.com/The-SP/Receipt-AI',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Movies For U',
    summary:
      'Movie discovery platform with preference-based recommendations, search, and bookmarking.',
    image: '/images/projects/movies.png',
    tools: ['React', 'Django REST', 'Scikit-learn'],
    links: {
      github: 'https://github.com/The-SP/Movies-For-U',
      live: null,
      youtube: 'https://youtu.be/zIf6A0G7pUQ',
    },
  },
  {
    title: 'Reddit AI Engagement Agent',
    summary:
      'Analyses Reddit posts and drafts tone-matched comments with the Gemini API, on a daily posting schedule.',
    image: '/images/projects/auto-commenter.png',
    tools: ['LangChain', 'FastAPI', 'Next.js', 'PRAW'],
    links: {
      github: 'https://github.com/The-SP/auto-commenter',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Visual E-Commerce Recommender',
    summary:
      'Fashion recommender that surfaces visually similar products using ResNet50 and transfer learning.',
    image: '/images/projects/ecommerce-recommender.png',
    tools: ['TensorFlow', 'CNN', 'Transfer Learning', 'ResNet50'],
    links: {
      github: 'https://github.com/The-SP/Visual-Based-E-Commerce-Recommender',
      live: null,
      youtube: null,
    },
  },
];

const linkLabels = {
  github: 'Code',
  live: 'Live',
  youtube: 'Demo',
} as const;

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hiddenCount = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Selected work"
          trailing={String(projects.length).padStart(2, '0')}
        />

        <div className="mt-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              // Toggled with a class, not the `hidden` attribute: Tailwind's
              // preflight scopes [hidden] inside :where() (zero specificity),
              // so the `grid` utility would override it.
              className={`group gap-6 border-t border-rule py-10 transition-colors md:grid-cols-[1fr_18rem] md:gap-12 ${
                !isExpanded && index >= INITIAL_COUNT ? 'hidden' : 'grid'
              }`}
            >
              <div className="order-2 md:order-1">
                <h3 className="display text-[1.625rem] tracking-tight md:text-[1.875rem]">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  {project.summary}
                </p>

                <p className="meta mt-5 flex flex-wrap gap-x-3 gap-y-1">
                  {project.tools.map((tool, i) => (
                    <span key={tool} className="flex items-center gap-3">
                      {i > 0 && <span className="text-rule">·</span>}
                      {tool}
                    </span>
                  ))}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {(
                    Object.keys(linkLabels) as (keyof typeof linkLabels)[]
                  ).map((key) => {
                    const href = project.links[key];
                    if (!href) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 font-mono text-xs tracking-wider uppercase transition-colors hover:border-signal hover:text-signal"
                      >
                        {linkLabels[key]}
                        <span aria-hidden>↗</span>
                        <span className="sr-only">
                          {' '}
                          for {project.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="overflow-hidden border border-rule">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    width={576}
                    height={360}
                    sizes="(min-width: 768px) 18rem, 100vw"
                    className="aspect-[16/10] w-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="border-t border-rule pt-10">
            <button
              type="button"
              onClick={() => setIsExpanded((expanded) => !expanded)}
              aria-expanded={isExpanded}
              className="btn-pill gap-2.5 px-5 py-3"
            >
              {isExpanded ? 'Show less' : `Show ${hiddenCount} more`}
              <span
                aria-hidden
                className={`transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
