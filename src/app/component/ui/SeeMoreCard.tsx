import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Github } from 'lucide-react';
import React from 'react';

const SeeMoreCard = () => {
  return (
    <div className="p-1 max-w-full mx-auto">
      <Card className="rounded-2xl p-4 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[450px] flex flex-col justify-center">
        <CardContent className="flex flex-col items-center justify-center flex-grow p-2 relative text-center space-y-6">
          <Github
            className="absolute w-32 h-32 opacity-10 pointer-events-none text-neutral-400"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 z-10">
            Explore More Projects
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm z-10 px-2">
            Discover more exciting projects and ideas I’ve worked on. Click below to dive deeper into my GitHub repository!
          </p>
          <a
            href="https://github.com/Abhijit-Jha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 z-10 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            <span>Visit My GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeeMoreCard;
