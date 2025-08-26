'use client';

import Image from 'next/image';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

// Skills data with SVG images
const skills = [
  {
    name: 'PYTHON',
    category: 'Backend',
    image: '/images/skills/python.svg',
  },
  {
    name: 'FASTAPI',
    category: 'Backend',
    image: '/images/skills/fastapi.svg',
  },
  {
    name: 'DJANGO',
    category: 'Backend',
    image: '/images/skills/django.svg',
  },
  {
    name: 'POSTGRESQL',
    category: 'Database',
    image: '/images/skills/postgresql.svg',
  },
  {
    name: 'AWS',
    category: 'Cloud',
    image: '/images/skills/aws.svg',
  },
  {
    name: 'DOCKER',
    category: 'Tools',
    image: '/images/skills/docker.svg',
  },
  {
    name: 'LANGCHAIN',
    category: 'LLM',
    image: '/images/skills/langchain.svg',
  },
  {
    name: 'JAVASCRIPT',
    category: 'Frontend',
    image: '/images/skills/javascript.svg',
  },
  {
    name: 'TYPESCRIPT',
    category: 'Frontend',
    image: '/images/skills/typescript.svg',
  },
  {
    name: 'NODE.JS',
    category: 'Backend',
    image: '/images/skills/node.svg',
  },
  {
    name: 'NEXT.JS',
    category: 'Frontend',
    image: '/images/skills/nextjs.svg',
  },
  {
    name: 'REACT',
    category: 'Frontend',
    image: '/images/skills/react.svg',
  },
  {
    name: 'GIT',
    category: 'Tools',
    image: '/images/skills/git.svg',
  },
  {
    name: 'SCIKIT-LEARN',
    category: 'Machine Learning',
    image: '/images/skills/scikitlearn.svg',
  },
  {
    name: 'TENSORFLOW',
    category: 'Machine Learning',
    image: '/images/skills/tensorflow.svg',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 backdrop-blur-sm"
            >
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Skill Image */}
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 p-2">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Skill name */}
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to staying current
              with the latest trends, frameworks, and best practices in software
              development. I believe in continuous learning and regularly
              explore new technologies to enhance my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
