import React from 'react';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'About' }) => {
  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'Connect', href: '#connect' }
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-4 lg:py-6 max-w-7xl mx-auto lg:pl-8">
        <div className="flex items-center gap-6 order-1 lg:order-1">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7838730ce5458cf1337e438f6765a96bfd623ad6?placeholderIfAbsent=true"
            alt="Logo showing sketchy guitar tuners with an inscription of Shannon McHarg on the guitar head"
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        <div className="flex-1 min-w-0 text-center lg:text-left order-2 lg:order-2">
          <h1 className="text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-[32px] font-bold leading-tight tracking-tight">
            Shannon McHarg
            <span className="text-secondary text-sm sm:text-base lg:text-lg xl:text-base font-medium block">
              Songwriter
            </span>
          </h1>
        </div>

        <nav className="flex items-center justify-center lg:justify-end gap-1 w-full lg:w-auto order-3 lg:order-3" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                activeSection === item.name
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-secondary hover:bg-accent/30'
              }`}
              aria-current={activeSection === item.name ? 'page' : undefined}
              role="link"
            >
              <span className="relative z-10">{item.name}</span>
              {activeSection !== item.name && (
                <div className="absolute inset-0 bg-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
