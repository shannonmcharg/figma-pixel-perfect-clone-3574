import React from 'react';

export const Music: React.FC = () => {
  const availableNowPlatforms = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/44321cf19157501330e82958763daee7ebe1a954?placeholderIfAbsent=true",
      alt: "Bandcamp platform logo",
      aspectRatio: "aspect-[3.18]",
      width: "w-[204px]",
      href: "https://shannonmcharg.bandcamp.com/"
    }
  ];

  const comingSoonPlatforms = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/11c2e22f26f83eefc0b55c4824460c9962f09d96?placeholderIfAbsent=true",
      alt: "Spotify music streaming platform logo", 
      aspectRatio: "aspect-[3.06]",
      width: "w-[196px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/aec7c2ab6451a33191f8637a15edf07b2ead3853?placeholderIfAbsent=true",
      alt: "Apple Music platform logo",
      aspectRatio: "aspect-[4.61]", 
      width: "w-[295px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/8f779beb511c99a6c61a5fc5ae3a42332b2cc49b?placeholderIfAbsent=true",
      alt: "YouTube music platform logo",
      aspectRatio: "aspect-[3.31]",
      width: "w-[212px]"
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
        
        <div className="mb-8">
          <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
            Available Now
          </h3>
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            {availableNowPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-32 sm:w-40 lg:w-auto hover:opacity-80 transition-opacity"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="w-full h-auto object-cover lg:w-auto lg:h-auto"
                    style={{ 
                      aspectRatio: platform.aspectRatio.replace('aspect-', '').replace('[', '').replace(']', ''),
                      maxWidth: platform.width.replace('w-', '').replace('[', '').replace(']', '').replace('px', '') + 'px'
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">
            Coming Soon to All Online Platforms
          </h3>
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 flex-wrap opacity-50">
            {comingSoonPlatforms.map((platform, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-32 sm:w-40 lg:w-auto"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="w-full h-auto object-cover lg:w-auto lg:h-auto"
                    style={{ 
                      aspectRatio: platform.aspectRatio.replace('aspect-', '').replace('[', '').replace(']', ''),
                      maxWidth: platform.width.replace('w-', '').replace('[', '').replace(']', '').replace('px', '') + 'px'
                    }}
                  />
                </div>
              </div>
            ))}
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
