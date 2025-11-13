import React from 'react';

export const OpenMics: React.FC = () => {
  return (
    <section 
      id="open-mics" 
      className="bg-background py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="open-mics-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="open-mics-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 lg:mb-16 relative text-left"
        >
          Open Mics
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <p className="text-foreground text-base mb-4 text-left">
          This is where you can see me play.
        </p>
        
        <div className="w-full overflow-hidden rounded-xl shadow-xl bg-background">
          {/* Calendar view for large screens */}
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=9046c3d97084617d290368f2f7c45a98712d14f66d21259292756e559d4812b5%40group.calendar.google.com&ctz=America%2FNew_York&mode=MONTH"
            className="hidden lg:block w-full h-[600px] border-0"
            title="Open Mics Calendar - Calendar View"
          />
          {/* Agenda view for small/medium screens */}
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=9046c3d97084617d290368f2f7c45a98712d14f66d21259292756e559d4812b5%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
            className="lg:hidden w-full h-[400px] sm:h-[500px] border-0"
            title="Open Mics Calendar - Agenda View"
          />
        </div>
      </div>
    </section>
  );
};
