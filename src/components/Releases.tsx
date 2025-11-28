import React from 'react';
import { Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import musixmatchLogo from '@/assets/musixmatch-logo.png';
import bandcampLogo from '@/assets/bandcamp-logo.png';
import spotifyLogo from '@/assets/spotify-logo.png';
import appleMusicLogo from '@/assets/apple-music-logo.svg';
import youtubeLogo from '@/assets/youtube-logo.png';
import amazonMusicLogo from '@/assets/amazon-music-logo.png';
import tidalLogo from '@/assets/tidal-logo.png';
import pandoraLogo from '@/assets/pandora-logo.png';
import deezerLogo from '@/assets/deezer-logo.png';
import iheartradioLogo from '@/assets/iheartradio-logo.png';
import qobuzLogo from '@/assets/qobuz-logo.png';

export const Releases: React.FC = () => {
  const availableNowPlatforms = [
    {
      src: amazonMusicLogo,
      alt: "Amazon Music platform logo",
      href: "https://music.amazon.com/artists/B0FV4TVBRB/shannon-mcharg",
      name: "Amazon Music"
    },
    {
      src: appleMusicLogo,
      alt: "Apple Music platform logo",
      href: "https://music.apple.com/us/artist/shannon-mcharg/1844698992",
      name: "Apple Music"
    },
    {
      src: bandcampLogo,
      alt: "Bandcamp platform logo",
      href: "https://shannonmcharg.bandcamp.com/",
      name: "Bandcamp"
    },
    {
      src: deezerLogo,
      alt: "Deezer music streaming platform logo",
      href: "https://www.deezer.com/us/artist/349913012",
      name: "Deezer"
    },
    {
      src: iheartradioLogo,
      alt: "iHeart Radio music streaming platform logo",
      href: "https://www.iheart.com/artist/shannon-mcharg-48243953/",
      name: "iHeart Radio"
    },
    {
      src: pandoraLogo,
      alt: "Pandora music streaming platform logo",
      href: "https://www.pandora.com/artist/shannon-mcharg/ARthXx7797ZX5fK",
      name: "Pandora"
    },
    {
      src: qobuzLogo,
      alt: "Qobuz music streaming platform logo",
      href: "https://play.qobuz.com/artist/28857460",
      name: "Qobuz"
    },
    {
      src: spotifyLogo,
      alt: "Spotify music streaming platform logo",
      href: "https://open.spotify.com/artist/6JUDGvBQiLagw4rt8Gb9ct?si=BUe2A0UGQYmeuY00msZWhQ",
      name: "Spotify"
    },
    {
      src: tidalLogo,
      alt: "Tidal music streaming platform logo",
      href: "https://tidal.com/artist/67993245",
      name: "Tidal"
    },
    {
      src: youtubeLogo,
      alt: "YouTube music platform logo",
      href: "https://music.youtube.com/channel/UCCZrRcE-indAPT6rVBaTDmA?si=GSF_LU_6-LyfdmWh",
      name: "YouTube"
    }
  ];

  return (
    <section 
      id="releases" 
      className="bg-background py-4 sm:py-6 lg:py-8 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8"
      aria-labelledby="releases-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="releases-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 sm:mb-8 lg:mb-10 relative text-left"
        >
          Music
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          <Card className="border border-border shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Stream My Music</h3>
              <p className="text-foreground text-sm mb-6">
                My artist page on your favorite streaming platforms.
              </p>
              
              <div className="flex flex-col gap-3 mb-4">
                {availableNowPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="relative aspect-square w-6 h-6 bg-transparent flex-shrink-0">
                      <img
                        src={platform.src}
                        alt={platform.alt}
                        className="w-full h-full object-contain bg-transparent"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                    <span className="text-sm text-foreground underline">{platform.name}</span>
                  </a>
                ))}
              </div>

              <p className="text-foreground text-xs">
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
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Holidaze Pie</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px', width: '100%' }}
                src="https://open.spotify.com/embed/album/7ii95Ab1L61yEfAw52cIwL?utm_source=generator"
                height="380"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Holidaze Pie by Shannon McHarg"
              />
              <div className="flex flex-col gap-2 mt-3">
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
                  <span className="text-foreground text-sm font-medium">Holidaze Pie lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-kZdEqWSE86048ZxWvCJzYf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6" />
                  <span className="text-foreground text-sm font-medium">Holidaze Pie videos</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Plastic Cuppa Fall</h3>
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
              <div className="flex flex-col gap-2 mt-3">
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
                  <span className="text-foreground text-sm font-medium">Plastic Cuppa Fall lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-naIiuRdTXk00-nZfz22J-Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6" />
                  <span className="text-foreground text-sm font-medium">Plastic Cuppa Fall videos</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
