import React from 'react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/de92c4b0cf657c343fd805205fc6bc6a90761783?placeholderIfAbsent=true",
      alt: "Facebook",
      href: "#facebook",
      className: "w-6 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a21a4a86570f9f064e8dd8b720171af437391f9c?placeholderIfAbsent=true", 
      alt: "Twitter",
      href: "#twitter",
      className: "w-7 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7c7882428c644b092335250bd4a53dfd25e3453a?placeholderIfAbsent=true",
      alt: "Instagram", 
      href: "#instagram",
      className: "w-6 h-6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f38b20d9602b2855e512dd211e924120bf18c9ef?placeholderIfAbsent=true",
      alt: "YouTube",
      href: "#youtube", 
      className: "w-[25px] h-[25px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/2679f721154c017c87bad1f03274fe82d5614e1b?placeholderIfAbsent=true",
      alt: "Spotify",
      href: "#spotify",
      className: "w-6 h-[18px]"
    }
  ];

  return (
    <footer 
      id="connect"
      className="border-t border-border bg-background"
      aria-labelledby="connect-heading"
    >
      <div className="flex justify-between items-center gap-10 flex-wrap px-12 py-5 max-md:px-5">
        <div className="flex-1 min-w-60 max-w-[838px] pr-20 pb-2 max-md:pr-0">
          <h2 
            id="connect-heading"
            className="text-secondary text-[32px] font-bold leading-[1.2] tracking-[-0.96px] mb-7"
          >
            Connect
          </h2>
          
          <nav aria-label="Social media links" className="mb-10">
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:opacity-70 transition-opacity"
                  aria-label={`Follow Shannon on ${link.alt}`}
                >
                  <img
                    src={link.src}
                    alt=""
                    className={`${link.className} object-contain`}
                    role="presentation"
                  />
                </a>
              ))}
            </div>
          </nav>
          
          <p className="text-foreground text-base font-normal leading-[1.2] tracking-[-0.48px]">
            © 2025 Shannon McHarg all rights reserved.
          </p>
        </div>
        
        <div className="shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/189d3e6f08298e0870d596e418d28690da7e04cc?placeholderIfAbsent=true"
            alt="Shannon McHarg signature logo"
            className="w-[126px] h-[126px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
};
