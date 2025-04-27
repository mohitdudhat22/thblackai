import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

export function GenerationWindow() {
  return (
    <div className="flex flex-col h-full w-full p-4 space-y-4">
      <Card className="flex-1 p-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-auto">
            {/* Generation content will go here */}
            <div className="text-gray-500 text-center py-8">
              Start generating content by entering your prompt below
            </div>
          </div>
          <div className="mt-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your prompt here..."
                className="flex-1"
              />
              <Button>Generate</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 