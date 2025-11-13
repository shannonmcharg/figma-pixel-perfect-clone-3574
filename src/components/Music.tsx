import React from 'react';
import bandcampLogo from '@/assets/bandcamp-logo.png';
import spotifyLogo from '@/assets/spotify-logo.png';
import appleMusicLogo from '@/assets/apple-music-logo.svg';
import youtubeLogo from '@/assets/youtube-logo.png';
import amazonMusicLogo from '@/assets/amazon-music-logo.png';
import tidalLogo from '@/assets/tidal-logo.png';
import pandoraLogo from '@/assets/pandora-logo.png';

export const Music: React.FC = () => {
  const availableNowPlatforms = [
    {
      src: bandcampLogo,
      alt: "Bandcamp platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://shannonmcharg.bandcamp.com/",
      name: "Bandcamp"
    },
    {
      src: spotifyLogo,
      alt: "Spotify music streaming platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://open.spotify.com/artist/6JUDGvBQiLagw4rt8Gb9ct?si=BUe2A0UGQYmeuY00msZWhQ",
      name: "Spotify"
    },
    {
      src: appleMusicLogo,
      alt: "Apple Music platform logo",
      aspectRatio: "aspect-square", 
      width: "w-[120px]",
      href: "https://music.apple.com/us/artist/shannon-mcharg/1844698992",
      name: "Apple Music"
    },
    {
      src: amazonMusicLogo,
      alt: "Amazon Music platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://music.amazon.com/artists/B0FV4TVBRB/shannon-mcharg",
      name: "Amazon Music"
    },
    {
      src: youtubeLogo,
      alt: "YouTube music platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://music.youtube.com/channel/UCCZrRcE-indAPT6rVBaTDmA?si=GSF_LU_6-LyfdmWh",
      name: "YouTube"
    },
    {
      src: tidalLogo,
      alt: "Tidal music streaming platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://tidal.com/artist/67993245",
      name: "Tidal"
    },
    {
      src: pandoraLogo,
      alt: "Pandora music streaming platform logo",
      aspectRatio: "aspect-square",
      width: "w-[120px]",
      href: "https://www.pandora.com/artist/shannon-mcharg/ARthXx7797ZX5fK",
      name: "Pandora"
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
            Releases
          </h3>
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-foreground text-lg font-medium text-left">Plastic Cuppa Fall</h4>
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/album/56DFiwDg7cMfJS3kSk1eBg?utm_source=generator" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Plastic Cuppa Fall by Shannon McHarg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-secondary text-2xl sm:text-3xl font-semibold mb-6 text-left">
            Listen Online
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="mb-8">
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
                  <span className="text-xs text-muted-foreground">{platform.name}</span>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-secondary text-2xl sm:text-3xl font-semibold mb-6 text-left">
            Open Mics
          </h3>
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
      </div>
    </section>
  );
};
