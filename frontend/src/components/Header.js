import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

const Header = ({ onNavigate, currentPage }) => {
  return (
    <header className="glass border-b border-primary-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => onNavigate && onNavigate('home')}
          >
            <div className="relative">
              <Brain className="w-10 h-10 text-primary-400" />
              <Sparkles className="w-4 h-4 text-accent-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Visualize.AI</h1>
              <p className="text-xs text-gray-400">Learn How Things Work</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate && onNavigate('features')} 
              className={`text-sm transition-colors ${currentPage === 'features' ? 'text-primary-400 font-medium' : 'text-gray-300 hover:text-primary-400'}`}
            >
              Features
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('how-it-works')} 
              className={`text-sm transition-colors ${currentPage === 'how-it-works' ? 'text-primary-400 font-medium' : 'text-gray-300 hover:text-primary-400'}`}
            >
              How It Works
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
