import React from 'react';
import { Mail, Newspaper } from 'lucide-react';
import youtubeLogo from '@/assets/youtube-logo.png';

export const Connect: React.FC = () => {
  const socialLinks = [
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
    }
  ];

  return (
    <section 
      id="connect"
      className="bg-muted py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="connect-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 lg:mb-16 relative text-left"
        >
          Connect
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <nav aria-label="Social media links">
          <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
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
              href="https://www.youtube.com/@shannonmchargsongs"
              tabIndex={0}
              className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
              aria-label="Follow Shannon on YouTube"
              role="link"
            >
              <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                <img
                  src={youtubeLogo}
                  alt=""
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                  role="presentation"
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">YouTube</span>
            </a>
            <a
              href="https://bsky.app/profile/shannonmchargsongs.bsky.social"
              tabIndex={0}
              className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
              aria-label="Follow Shannon on Bluesky"
              role="link"
            >
              <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a21a4a86570f9f064e8dd8b720171af437391f9c?placeholderIfAbsent=true"
                  alt=""
                  className="w-7 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                  role="presentation"
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Bluesky</span>
            </a>
            <a
              href="https://www.facebook.com/shannonmchargsongs"
              tabIndex={0}
              className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
              aria-label="Follow Shannon on Facebook"
              role="link"
            >
              <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f38b20d9602b2855e512dd211e924120bf18c9ef?placeholderIfAbsent=true"
                  alt=""
                  className="w-[25px] h-[25px] object-contain group-hover:scale-110 transition-transform duration-300"
                  role="presentation"
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Facebook</span>
            </a>
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
      </div>
    </section>
  );
};
