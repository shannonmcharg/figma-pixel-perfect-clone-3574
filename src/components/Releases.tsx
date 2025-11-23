import React from 'react';
import { Youtube } from 'lucide-react';
import musixmatchLogo from '@/assets/musixmatch-logo.png';
import bandcampLogo from '@/assets/bandcamp-logo.png';
import spotifyLogo from '@/assets/spotify-logo.png';
import appleMusicLogo from '@/assets/apple-music-logo.svg';
import youtubeLogo from '@/assets/youtube-logo.png';
import amazonMusicLogo from '@/assets/amazon-music-logo.png';
import tidalLogo from '@/assets/tidal-logo.png';
import pandoraLogo from '@/assets/pandora-logo.png';

export const Releases: React.FC = () => {
  const availableNowPlatforms = [
    {
      src: bandcampLogo,
      alt: "Bandcamp platform logo",
      href: "https://shannonmcharg.bandcamp.com/",
      name: "Bandcamp"
    },
    {
      src: spotifyLogo,
      alt: "Spotify music streaming platform logo",
      href: "https://open.spotify.com/artist/6JUDGvBQiLagw4rt8Gb9ct?si=BUe2A0UGQYmeuY00msZWhQ",
      name: "Spotify"
    },
    {
      src: appleMusicLogo,
      alt: "Apple Music platform logo",
      href: "https://music.apple.com/us/artist/shannon-mcharg/1844698992",
      name: "Apple Music"
    },
    {
      src: amazonMusicLogo,
      alt: "Amazon Music platform logo",
      href: "https://music.amazon.com/artists/B0FV4TVBRB/shannon-mcharg",
      name: "Amazon Music"
    },
    {
      src: youtubeLogo,
      alt: "YouTube music platform logo",
      href: "https://music.youtube.com/channel/UCCZrRcE-indAPT6rVBaTDmA?si=GSF_LU_6-LyfdmWh",
      name: "YouTube"
    },
    {
      src: tidalLogo,
      alt: "Tidal music streaming platform logo",
      href: "https://tidal.com/artist/67993245",
      name: "Tidal"
    },
    {
      src: pandoraLogo,
      alt: "Pandora music streaming platform logo",
      href: "https://www.pandora.com/artist/shannon-mcharg/ARthXx7797ZX5fK",
      name: "Pandora"
    }
  ];

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
          Music
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>

        <h2 className="text-secondary text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-left">
          Releases
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          <div className="flex flex-col items-start gap-3 flex-1">
            <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-6 text-left">Holidaze Pie</h3>
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
            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://www.musixmatch.com/album/Shannon-McHarg/Holidaze-Pie-EP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
              >
                <img
                  src={musixmatchLogo}
                  alt="Musixmatch logo"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-foreground text-sm font-medium">Holidaze Pie Lyrics</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 flex-1">
            <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-6 text-left">Plastic Cuppa Fall</h3>
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

        <div>
          <h3 className="text-secondary text-2xl sm:text-3xl font-semibold mb-6 text-left">
            Streaming Platforms
          </h3>
          <p className="text-foreground text-base mb-6">
            My artist page on your favorite streaming platforms.
          </p>
          
          <div className="flex items-center justify-start gap-4 sm:gap-6 lg:gap-8 flex-wrap">
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
          <p className="text-muted-foreground text-sm mt-6">
            Don't see your favorite platform?{' '}
            <a 
              href="https://cdbaby.com/music-distribution/digital-distribution-partners/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              Full list of platforms
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
