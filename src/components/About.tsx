'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';

// Data variables
const bio =
  'As a computer engineering graduate from Pulchowk Campus, I have developed a keen interest in the areas of web development, backend APIs, and machine learning. With a passion for staying abreast of emerging technologies, I am constantly seeking opportunities to learn and grow my skillset.';

const roles = ['Full Stack Developer', 'Data Engineer', 'Computer Engineer'];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/surajpathak',
    icon: Github,
    hoverColor:
      'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/surajpathak',
    icon: Linkedin,
    hoverColor: 'hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-8 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Mobile-first layout - Image first on mobile */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
                Hi, I am{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Suraj Pathak
                </span>
              </h1>

              <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center lg:text-left">
                <span className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span>I am a</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 min-w-0 flex-shrink-0">
                    <Typewriter
                      options={{
                        strings: roles,
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 30,
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                {bio}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="lg"
                    className={`flex items-center space-x-2 ${link.hoverColor} transition-colors duration-200`}
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{link.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Profile image - First on mobile, second on desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl scale-110"></div>

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Suraj Pathak"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30 dark:border-blue-300/30 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
