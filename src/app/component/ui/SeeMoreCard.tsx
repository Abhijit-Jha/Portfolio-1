import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Github } from 'lucide-react';
import React from 'react';

const SeeMoreCard = () => {
  return (
    <div className="p-4">
      <Card className="relative shadow-lg rounded-lg p-6 h-80 text-center items-center">
        <Github
          className="absolute w-32 h-32 opacity-10 pointer-events-none"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        <CardContent className="relative flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-500 z-10">
            Explore More Projects
          </h3>

          <p className="text-sm text-gray-600 max-w-sm z-10">
            Discover more exciting projects and ideas I’ve worked on. Click the link below to dive deeper into my GitHub repository!
          </p>

          <a
            href="https://github.com/Abhijit-Jha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 z-10 text-blue-600 hover:text-blue-700 underline font-medium"
          >
            <span>Visit My GitHub</span>
            <ArrowRight />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeeMoreCard;
