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
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-16 flex-wrap px-8 py-16 max-md:px-5">
        <div className="flex-1 min-w-60 max-w-[600px] space-y-10">
          <h2 
            id="connect-heading"
            className="text-secondary text-4xl md:text-5xl font-bold leading-tight tracking-tight relative"
          >
            Connect
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          
          <nav aria-label="Social media links">
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 hover:scale-110 group"
                  aria-label={`Follow Shannon on ${link.alt}`}
                >
                  <img
                    src={link.src}
                    alt=""
                    className={`${link.className} object-contain group-hover:scale-110 transition-transform duration-300`}
                    role="presentation"
                  />
                </a>
              ))}
            </div>
          </nav>
          
          <p className="text-muted-foreground text-sm font-medium">
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
