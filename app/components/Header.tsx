import { BarChart3 } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <>
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
        
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:ml-8 items-center" role="navigation" aria-label="External links">
          {/* Datawizz promotion with arrow */}
          <div className="datawizz-promotion">
            <a
              href="https://datawizz.ai"
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label="DataWizz - Smarter routing, cheaper AI"
              className="datawizz-button"
            >
              <img src="/datawizz.svg" alt="DataWizz" className="datawizz-logo" />
              <span className="datawizz-tagline">Smarter routing, cheaper AI</span>
            </a>
            
            {/* Marker-style arrow pointing to the button */}
            {/* <div className="datawizz-arrow-container">
              <div className="datawizz-arrow-wrapper">
                <img src="/pppointed.svg" alt="" className="datawizz-marker-arrow" aria-hidden="true" />
              </div>
              <p className="datawizz-try-text">Try DataWizz</p>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}