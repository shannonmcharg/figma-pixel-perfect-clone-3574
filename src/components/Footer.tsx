import React from 'react';
import { Mail, Newspaper } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a21a4a86570f9f064e8dd8b720171af437391f9c?placeholderIfAbsent=true", 
      alt: "Bluesky",
      href: "https://bsky.app/profile/shannonmchargsongs.bsky.social",
      className: "w-7 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/de92c4b0cf657c343fd805205fc6bc6a90761783?placeholderIfAbsent=true",
      alt: "Instagram",
      href: "https://www.instagram.com/shannonmchargsongs/",
      className: "w-6 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7c7882428c644b092335250bd4a53dfd25e3453a?placeholderIfAbsent=true",
      alt: "TikTok", 
      href: "https://www.tiktok.com/@shannonmchargsongs",
      className: "w-6 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/youtube-icon?placeholderIfAbsent=true",
      alt: "YouTube",
      href: "https://www.youtube.com/@shannonmchargsongs",
      className: "w-6 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f38b20d9602b2855e512dd211e924120bf18c9ef?placeholderIfAbsent=true",
      alt: "Facebook",
      href: "https://www.facebook.com/shannonmchargsongs", 
      className: "w-[25px] h-[25px]"
    }
  ];

  return (
    <footer 
      id="connect"
      className="border-t border-border bg-background px-4 sm:px-6 lg:px-8"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16 py-12 sm:py-16">
        <div className="flex-1 w-full lg:min-w-60 lg:max-w-[600px] space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
          <h2 
            id="connect-heading"
            className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight relative"
          >
            Connect
            <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          
          <nav aria-label="Social media links">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <a
                href="https://buttondown.com/shannonmchargsongs"
                tabIndex={0}
                className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                aria-label="Subscribe to Shannon's newsletter"
                role="link"
              >
                <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                  <Newspaper className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Newsletter</span>
              </a>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  tabIndex={0}
                  className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                  aria-label={`Follow Shannon on ${link.alt}`}
                  role="link"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                    <img
                      src={link.src}
                      alt=""
                      className={`${link.className} object-contain group-hover:scale-110 transition-transform duration-300`}
                      role="presentation"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{link.alt}</span>
                </a>
              ))}
              <a
                href="mailto:shannonmchargsongwriter@gmail.com"
                tabIndex={0}
                className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                aria-label="Email Shannon"
                role="link"
              >
                <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Email Me</span>
              </a>
            </div>
          </nav>
          
          <p className="text-muted-foreground text-xs sm:text-sm font-medium">
            © 2025 Shannon McHarg. All rights reserved.
          </p>
        </div>
        
        <div className="shrink-0 h-full flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/189d3e6f08298e0870d596e418d28690da7e04cc?placeholderIfAbsent=true"
            alt="Logo showing sketchy guitar tuners with an inscription of Shannon McHarg on the guitar head"
            className="h-full w-auto object-contain max-h-[200px] sm:max-h-[240px]"
          />
        </div>
      </div>
    </footer>
  );
};
