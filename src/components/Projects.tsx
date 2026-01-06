'use client';

import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Project categories type
type ProjectCategory = 'All' | 'Featured' | 'Full-Stack' | 'AI' | 'Frontend';

// Projects data with categories
const projects = [
  {
    title: 'Hire Nepal',
    description:
      'Full-stack job portal featuring Applicant Ranking System that automatically parses and ranks resumes based on job description relevance. The platform integrates a comprehensive candidate experience including personalized job recommendation and tools for building resumes and cover letters.',
    image: '/images/projects/job.png',
    tools: ['React', 'Django REST', 'SpaCy'],
    categories: ['Featured', 'Full-Stack', 'AI'] as ProjectCategory[],
    links: {
      github: 'https://github.com/The-SP/Job-Portal-Frontend',
      live: null,
      youtube: 'https://youtu.be/T3Hj6fBOIFk',
    },
  },
  {
    title: 'Movies For U',
    description:
      'A full-stack movie discovery platform featuring personalized recommendations based on user preference, with search and bookmarking functionality.',
    image: '/images/projects/movies.png',
    tools: ['React', 'Django REST', 'Scikit-learn'],
    categories: ['Featured', 'Full-Stack', 'AI'] as ProjectCategory[],
    links: {
      github: 'https://github.com/The-SP/Movies-For-U',
      live: null,
      youtube: 'https://youtu.be/zIf6A0G7pUQ',
    },
  },
  {
    title: 'ChatVerse',
    description:
      'A real-time messaging platform that supports instant messages with WebSocket connections and features AI-powered conversation summaries of chat history.',
    image: '/images/projects/chatverse.png',
    tools: ['FastAPI', 'Next.js', 'WebSockets', 'LangChain'],
    categories: ['Featured', 'Full-Stack', 'AI'] as ProjectCategory[],
    links: {
      github: 'https://github.com/The-SP/ChatVerse',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Reddit AI Engagement Agent',
    description:
      "An automated agent that analyzes Reddit posts and generates tone-specific AI comments using Gemini API and LangChain, integrated with scheduling capabilities for daily comment posting.",
    image: '/images/projects/auto-commenter.png',
    tools: ['LangChain', 'FastAPI', 'Next.js', 'PRAW'],
    categories: ['Featured', 'Full-Stack', 'AI'] as ProjectCategory[],
    links: {
      github: 'https://github.com/The-SP/auto-commenter',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Receipt-AI',
    description:
      "AI-driven data extraction tool for parsing receipt images into structured data using Gemini API, integrated with rate-limited endpoints.",
    image: '/images/projects/receipt-ai.png',
    tools: ['FastAPI', 'Next.js', 'LangChain', 'Gemini API', 'Redis'],
    categories: ['Featured', 'Full-Stack', 'AI'] as ProjectCategory[],
    links: {
      github: 'https://github.com/The-SP/Receipt-AI',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Visual-Based E-Commerce Recommender',
    description:
      'A deep learning E-Commerce fashion recommendation system using ResNet50 to suggest visually similar products through transfer learning and computer vision.',
    image: '/images/projects/ecommerce-recommender.png',
    tools: ['TensorFlow', 'CNN', 'Transfer Learning', 'ResNet50'],
    categories: ['Featured', 'AI'] as ProjectCategory[],
    links: {
      github: 'https://github.com/The-SP/Visual-Based-E-Commerce-Recommender',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Swastik Construction',
    description:
      'A professional website developed for a construction company, showcasing their portfolio and services with responsive design and modern UI.',
    image: '/images/projects/construction.png',
    tools: ['Next.js', 'Tailwind CSS'],
    categories: ['Frontend'] as ProjectCategory[],
    links: {
      github: null,
      live: 'https://swastiknepalconstruction.com.np/',
      youtube: null,
    },
  },
];

// Category filter options
const categories: ProjectCategory[] = [
  'All',
  'Featured',
  'Full-Stack',
  'AI',
  'Frontend',
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>('Featured');

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills in web development, machine learning, and software
            engineering
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white border-transparent'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={`${selectedCategory}-${index}`}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback gradient background if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background =
                        'linear-gradient(135deg, rgb(59 130 246 / 0.5) 0%, rgb(147 51 234 / 0.5) 100%)';
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-3">
                    {project.links.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-200"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-xs">Code</span>
                        </a>
                      </Button>
                    )}

                    {project.links.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200"
                        asChild
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-xs">Live</span>
                        </a>
                      </Button>
                    )}

                    {project.links.youtube && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:bg-red-600 hover:text-white dark:hover:bg-red-500 transition-colors duration-200"
                        asChild
                      >
                        <a
                          href={project.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4" />
                          <span className="text-xs">Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
