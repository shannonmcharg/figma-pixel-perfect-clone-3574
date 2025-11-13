import React from 'react';
import { Youtube } from 'lucide-react';
import musixmatchLogo from '@/assets/musixmatch-logo.png';

export const Releases: React.FC = () => {
  return (
    <section 
      id="releases" 
      className="bg-background py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="releases-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="releases-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 lg:mb-16 relative text-left"
        >
          Releases
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex flex-col items-start gap-3 flex-1">
            <h3 className="text-secondary text-2xl sm:text-3xl font-semibold mb-6 text-left">Holidaze Pie</h3>
            <iframe 
              src="https://show.co/f5VqiFX" 
              style={{ borderRadius: '12px', width: '100%' }} 
              height="380" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Holidaze Pie by Shannon McHarg - Pre-save"
            />
          </div>

          <div className="flex flex-col items-start gap-3 flex-1">
            <h3 className="text-secondary text-2xl sm:text-3xl font-semibold mb-6 text-left">Plastic Cuppa Fall</h3>
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px', width: '100%' }} 
              src="https://open.spotify.com/embed/album/56DFiwDg7cMfJS3kSk1eBg?utm_source=generator" 
              height="380" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Plastic Cuppa Fall by Shannon McHarg"
            />
            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://www.musixmatch.com/album/Shannon-McHarg/Plastic-Cuppa-Fall-Single"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
              >
                <img
                  src={musixmatchLogo}
                  alt="Musixmatch logo"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-foreground text-sm font-medium">Plastic Cuppa Fall Lyrics</span>
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-naIiuRdTXk00-nZfz22J-Y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
              >
                <Youtube className="w-6 h-6" />
                <span className="text-foreground text-sm font-medium">Plastic Cuppa Fall Videos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
