import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Github } from 'lucide-react';
import React from 'react';

const SeeMoreCard = () => {
  return (
    <div className="p-4">
      <Card className="relative shadow-lg rounded-lg p-6 h-80 text-center items-center ">
        <Github 
          className="absolute inset-0 w-1/4 h-2/3 opacity-20 m-auto pointer-events-none"
          style={{ top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}
        />

        <CardContent className="relative flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-500 z-10">
            Explore More Projects
          </h3>

          <p className="text-sm text-gray-600 max-w-sm z-10">
            Discover more exciting projects and ideas I’ve worked on. Click the link below to dive deeper into my GitHub repository!
          </p>

          <div className="flex items-center space-x-2 z-10 hover:text-blue-700 text-blue-600">
            <p className="text-base font-medium text-blue-600 underline cursor-pointer hover:text-blue-700">
              Visit My GitHub
            </p>
            <ArrowRight className="text-blue-600 hover:text-blue-700 cursor-pointer" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeeMoreCard;
