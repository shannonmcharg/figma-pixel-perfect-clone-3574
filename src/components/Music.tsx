import React from 'react';
import bandcampLogo from '@/assets/bandcamp-logo.png';
import spotifyLogo from '@/assets/spotify-logo.png';
import appleMusicLogo from '@/assets/apple-music-logo.svg';
import youtubeLogo from '@/assets/youtube-logo.png';
import amazonMusicLogo from '@/assets/amazon-music-logo.png';

export const Music: React.FC = () => {
  const availableNowPlatforms = [
    {
      src: bandcampLogo,
      alt: "Bandcamp platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://shannonmcharg.bandcamp.com/"
    }
  ];

  const comingSoonPlatforms = [
    {
      src: spotifyLogo,
      alt: "Spotify music streaming platform logo", 
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      name: "Spotify"
    },
    {
      src: appleMusicLogo,
      alt: "Apple Music platform logo",
      aspectRatio: "aspect-square", 
      width: "w-[120px]",
      name: "Apple Music"
    },
    {
      src: amazonMusicLogo,
      alt: "Amazon Music platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      name: "Amazon Music"
    },
    {
      src: youtubeLogo,
      alt: "YouTube music platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      name: "YouTube"
    }
  ];

  return (
    <section 
      id="music" 
      className="bg-muted py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="music-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="music-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 lg:mb-16 relative text-center lg:text-left"
        >
          Music
          <div className="absolute -bottom-4 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <div className="mb-12">
          <h3 className="text-secondary text-2xl sm:text-3xl font-semibold mb-6 text-left">
            Online Platforms
          </h3>
          
          <div className="mb-8">
          <h4 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
            Available Now
          </h4>
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            {availableNowPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="relative aspect-square w-8 sm:w-10 lg:w-12 bg-transparent">
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="w-full h-full object-contain bg-transparent"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">Bandcamp</span>
              </a>
            ))}
          </div>
        </div>

          <div className="mb-8">
            <h4 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
              Coming Soon
            </h4>
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 flex-wrap opacity-50">
            {comingSoonPlatforms.map((platform, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2"
              >
                <div className="relative aspect-square w-8 sm:w-10 lg:w-12 bg-transparent">
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="w-full h-full object-contain bg-transparent"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
            Open Mics
          </h3>
          <p className="text-foreground text-base mb-4 text-left">
            This is where you can see me play.
          </p>
          
          <div className="w-full overflow-hidden rounded-xl shadow-xl bg-background">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=9046c3d97084617d290368f2f7c45a98712d14f66d21259292756e559d4812b5%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] border-0"
              title="Open Mics Calendar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
