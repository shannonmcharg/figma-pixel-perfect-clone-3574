import React from 'react';

export const Music: React.FC = () => {
  return (
    <section 
      id="music" 
      className="bg-muted py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="music-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="music-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 lg:mb-16 relative text-left"
        >
          Music
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
      </div>
    </section>
  );
};
