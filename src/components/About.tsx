import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-md:px-5 animate-slide-up" aria-labelledby="about-heading">
      <div className="flex justify-between items-start gap-16 flex-wrap max-w-7xl mx-auto">
        <div className="min-w-60 max-w-[628px] flex-1 group">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0c27cf0c641e09de51f7e9b0a10eda870eec427d?placeholderIfAbsent=true"
            alt="Shannon McHarg performing with guitar"
            className="w-full aspect-[0.75] object-cover rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
          />
        </div>
        
        <article className="min-w-60 max-w-[520px] flex-1 space-y-8">
          <h2 
            id="about-heading"
            className="text-secondary text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10 relative"
          >
            About
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          
          <div className="text-foreground text-xl font-normal leading-relaxed tracking-normal space-y-6">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none">
              Shannon McHarg has been writing songs since 2016. Her first guitar
              teacher convinced her to attend an open mic that he ran. She enjoyed
              performing and playing covers to hone her skills. After a couple of
              years playing covers, her regular open mic turned into a
              songwriter's open mic. She'd written a couple of songs, but the
              shift in open mic format was a catalyst to dive head first into
              songwriting.
            </p>
            <p className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              Shannon writes quirky, punky, observational songs about
              social issues, politics, and holidays.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
