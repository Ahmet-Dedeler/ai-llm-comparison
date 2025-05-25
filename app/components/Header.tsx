import { Github, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-4 md:space-y-0" role="banner">
      <div className="flex items-center space-x-2">
        <BarChart3 className="w-8 h-8" aria-hidden="true" />
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-bold">llmarena.ai</h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium" role="note">
            countless.dev is now llmarena.ai!
          </span>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3" role="navigation" aria-label="External links">
        <Button variant="outline" size="sm" asChild className="border-black text-black hover:bg-gray-100">
          <a 
            href="https://github.com/Ahmet-Dedeler/ai-llm-comparison" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </Button>
        {/* ... (other buttons) ... */}
      </nav>
    </header>
  );
}