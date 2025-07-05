import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <nav className="flex justify-between items-center px-4 lg:px-8 py-4 max-w-7xl mx-auto">
          <a href="#" className="text-2xl font-bold text-white tracking-tight">
            CodeMap
          </a>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#learn" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Learn</a></li>
            <li><a href="#roadmaps" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Roadmaps</a></li>
            <li><a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Projects</a></li>
            <li><a href="#community" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Community</a></li>
            <li><a href="#docs" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Docs</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 lg:px-8 relative pt-24">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-slate-900/30 via-transparent to-black"></div>
        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Navigate Your Frontend Journey
            </span>
          </h1>
          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform from zero to frontend developer with our structured learning paths, hands-on projects, 
            and supportive community designed specifically for beginners.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#start" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg 
                       hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 
                       shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:shadow-xl w-full sm:w-auto text-center"
            >
              Start Learning
            </a>
            <a 
              href="#explore" 
              className="px-8 py-4 bg-white/10 text-white font-medium rounded-lg border border-white/20 
                       hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 
                       backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Explore Roadmaps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero; 