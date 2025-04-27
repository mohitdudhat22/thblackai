import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarOption {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const options: SidebarOption[] = [
    {
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      content: <div>Settings content</div>
    },
    {
      title: 'History',
      icon: <History className="w-5 h-5" />,
      content: <div>History content</div>
    },
    {
      title: 'Templates',
      icon: <FileText className="w-5 h-5" />,
      content: <div>Templates content</div>
    }
  ];

  return (
    <div className={`flex h-full ${isCollapsed ? 'w-12' : 'w-64'}`}>
      <div className="flex flex-col h-full border-r">
        <div className="flex items-center justify-between p-2">
          {!isCollapsed && <span className="font-semibold">Options</span>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {options.map((option) => (
            <div key={option.title}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${isCollapsed ? 'justify-center' : ''}`}
                onClick={() => setActiveOption(activeOption === option.title ? null : option.title)}
              >
                {option.icon}
                {!isCollapsed && <span className="ml-2">{option.title}</span>}
              </Button>
              {!isCollapsed && activeOption === option.title && (
                <div className="pl-4 py-2">
                  {option.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 