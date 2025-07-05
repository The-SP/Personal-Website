'use client';

import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Projects data
const projects = [
  {
    title: 'Hire Nepal',
    description:
      'A Job Portal website that facilitates seamless job postings, automated resume parsing and applicant ranking for employers, while providing job seekers with personalized job recommendations and a user-friendly interface to apply for their desired positions.',
    image: '/images/projects/job.png',
    tools: ['React', 'Django-REST', 'SpaCy'],
    links: {
      github: 'https://github.com/The-SP/Job-Portal-Frontend',
      live: null,
      youtube: 'https://youtu.be/T3Hj6fBOIFk',
    },
  },
  {
    title: 'Movies For U',
    description:
      'Movies For U is a full-stack application that allows users to search for movies based on titles or keywords, bookmark them for future viewing, and receive personalized recommendations based on their preferences.',
    image: '/images/projects/movies.png',
    tools: ['React', 'Django-REST', 'Scikit-learn'],
    links: {
      github: 'https://github.com/The-SP/Movies-For-U',
      live: null,
      youtube: 'https://youtu.be/zIf6A0G7pUQ',
    },
  },
  {
    title: 'ChatVerse',
    description:
      'ChatVerse is a real-time messaging platform built with FastAPI and Next.js. The app supports instant messages with WebSocket connections and features AI-powered conversation summaries of chat history.',
    image: '/images/projects/chatverse.png',
    tools: ['FastAPI', 'Next.js', 'WebSocket', 'LLM', 'Langchain'],
    links: {
      github: 'https://github.com/The-SP/ChatVerse',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Receipt-AI',
    description:
      "A full-stack application for parsing receipts using AI. Features receipt parsing from images, AI-powered analysis using Google's Gemini models, and rate-limited API endpoints for efficient processing.",
    image: '/images/projects/receipt-ai.png',
    tools: ['FastAPI', 'Next.js', 'Langchain', 'Gemini API', 'Redis'],
    links: {
      github: 'https://github.com/The-SP/Receipt-AI',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Visual-Based E-Commerce Recommender',
    description:
      'A Deep Learning-based E-Commerce fashion product Recommendation System utilizing the ResNet50 architecture. It provides fashion recommendations based on visual similarity using advanced computer vision techniques.',
    image: '/images/projects/ecommerce-recommender.png',
    tools: ['TensorFlow', 'CNN', 'Transfer Learning', 'ResNet50'],
    links: {
      github: 'https://github.com/The-SP/Visual-Based-E-Commerce-Recommender',
      live: null,
      youtube: null,
    },
  },
  {
    title: 'Sorting Visualizer',
    description:
      'Visualization of different sorting algorithms (bubble, insertion, selection, quick, merge, radix, shell, heap) using React',
    image: '/images/projects/sort.png',
    tools: ['React', 'Sorting-algorithms'],
    links: {
      github: 'https://github.com/The-SP/Visualizer',
      live: 'https://sortvisualizzer.netlify.app/',
      youtube: null,
    },
  },
  {
    title: 'N-Queen Visualizer',
    description:
      'Visualization of N-Queen problem in React.js. The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.',
    image: '/images/projects/nqueen.png',
    tools: ['React'],
    links: {
      github: 'https://github.com/The-SP/N-Queen-Visualizer',
      live: 'https://nqueen-visualizer.netlify.app/',
      youtube: null,
    },
  },
  {
    title: 'Swastik Construction',
    description:
      'A real project where I developed a website for a construction company, showcasing their portfolio and services with user-friendly navigation and modern design elements.',
    image: '/images/projects/construction.png',
    tools: ['Next.js', 'Tailwind CSS'],
    links: {
      github: null,
      live: 'https://swastiknepalconstruction.com.np/',
      youtube: null,
    },
  },
  // {
  //   title: '3D Airplane Modeling',
  //   description:
  //     '3D modeling of Airbus A380 using three.js This was done as a part of Computer Graphics course.',
  //   image: '/images/projects/airplane.png',
  //   tools: ['Three.js', 'C++'],
  //   links: {
  //     github: 'https://github.com/The-SP/Airplane-3JS',
  //     live: null,
  //     youtube: null,
  //   },
  // },
  {
    title: 'Duel Battle',
    description:
      'Duel Battle is a multiplayer game where 2 players battle against each other in three rounds with different games (Ping Pong, Space Race, Jungle Run) and try to outscore their opponents.',
    image: '/images/projects/duel.png',
    tools: ['C++', 'SFML'],
    links: {
      github: 'https://github.com/The-SP/Duel-Battle',
      live: null,
      youtube: null,
    },
  },
];

const Projects = () => {
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
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in web development, machine learning, and software engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Image - Increased height from h-48 to h-64 */}
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
                          className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
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
      </div>
    </section>
  );
};

export default Projects;
