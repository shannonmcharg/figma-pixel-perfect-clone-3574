import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-6 animate-slide-up" aria-labelledby="about-heading">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        <div className="w-full lg:w-auto lg:min-w-60 lg:max-w-[628px] lg:flex-1 group order-2 lg:order-1">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0c27cf0c641e09de51f7e9b0a10eda870eec427d?placeholderIfAbsent=true"
            alt="Sketchy image of Shannon McHarg playing guitar at an open mic"
            className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-[0.75] object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <article className="w-full lg:w-auto lg:min-w-60 lg:max-w-[520px] lg:flex-1 space-y-6 sm:space-y-8 order-1 lg:order-2">
          <h2 
            id="about-heading"
            className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 sm:mb-8 lg:mb-10 relative text-left"
          >
            About
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          
          <div className="text-foreground text-lg sm:text-xl font-normal leading-relaxed tracking-normal space-y-4 sm:space-y-6">
            <p className="text-left">
              Shannon McHarg has been writing songs since 2016. Her first guitar
              teacher convinced her to attend an open mic that he ran. She enjoyed
              performing and playing covers to hone her skills. After a couple of
              years playing covers, her regular open mic turned into a
              songwriter's open mic. She'd written a couple of songs, but the
              shift in open mic format was a catalyst to dive head first into
              songwriting.
            </p>
            <p className="text-base sm:text-lg italic text-muted-foreground border-l-4 border-primary pl-4 sm:pl-6 text-left">
              Shannon writes quirky, punky, observational songs about
              social issues, politics, and holidays.
            </p>
            
            <div className="mt-8 sm:mt-10">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
                Influences
              </h3>
              <div className="flex flex-wrap gap-2 justify-start">
                {['Ani DiFranco', 'Billy Bragg', 'Brandi Carlile', 'Butch Walker', 'Cake', 'The Clash', 'Daniel Johnston', 'Elvis Costello', 'Jill Sobule', 'Kacey Musgraves', 'Liz Phair', 'Margaret Glaspy', 'Patti Smith', 'Pete Yorn', 'PJ Harvey', 'The Replacements', 'Sam Phillips', 'Siouxsie and the Banshees', 'Whim', 'XTC'].map((influence) => (
                  <span
                    key={influence}
                    className="px-3 py-1.5 bg-primary/10 text-foreground rounded-full text-sm font-medium border border-primary/20"
                  >
                    {influence}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
                Collaborators
              </h3>
              <div className="space-y-3">
                <div className="text-left">
                  <a href="https://judcaswell.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors underline">Jud Caswell:</a>
                  <span className="text-foreground ml-2">Production and recording</span>
                </div>
                <div className="text-left">
                  <a href="https://www.facebook.com/CowboyRexyDinosaur" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors underline">Rexy Dinosaur:</a>
                  <span className="text-foreground ml-2">Bass and percussion</span>
                </div>
                <div className="text-left">
                  <a href="https://chenardvoicestudio.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors underline">Erin Chendar:</a>
                  <span className="text-foreground ml-2">Vocal coaching</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
