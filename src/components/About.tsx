import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 px-6 max-md:px-5" aria-labelledby="about-heading">
      <div className="flex justify-between items-start gap-10 flex-wrap max-w-full">
        <div className="min-w-60 max-w-[628px] flex-1">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0c27cf0c641e09de51f7e9b0a10eda870eec427d?placeholderIfAbsent=true"
            alt="Shannon McHarg performing with guitar"
            className="w-full aspect-[0.75] object-cover rounded-lg"
          />
        </div>
        
        <article className="min-w-60 max-w-[460px] flex-1">
          <h2 
            id="about-heading"
            className="text-[#0A5176] text-[32px] font-bold leading-[1.2] tracking-[-0.96px] mb-8"
          >
            About
          </h2>
          
          <div className="text-[#1E1E1E] text-xl font-normal leading-6 tracking-[-0.6px]">
            <p>
              Shannon McHarg has been writing songs since 2016. Her first guitar
              teacher convinced her to attend an open mic that he ran. She enjoyed
              performing and playing covers to hone her skills. After a couple of
              years playing covers, her regular open mic turned into a
              songwriter's open mic. She'd written a couple of songs, but the
              shift in open mic format was a catalyst to dive head first into
              songwriting.
            </p>
            <p className="mt-4">
              Shannon writes quirky, punky, observational songs about
              social issues, politics, and holidays.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
