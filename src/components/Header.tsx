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
      <div className="flex items-center justify-between flex-wrap gap-8 px-8 py-6 max-md:px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7838730ce5458cf1337e438f6765a96bfd623ad6?placeholderIfAbsent=true"
            alt="Shannon McHarg Logo"
            className="w-[51px] h-[51px] object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        <div className="flex-1 min-w-[332px] text-center md:text-left">
          <h1 className="text-primary text-4xl md:text-[32px] font-bold leading-tight tracking-tight">
            Shannon McHarg{' '}
            <span className="text-secondary text-lg md:text-base font-medium block md:inline">
              Songwriter
            </span>
          </h1>
        </div>

        <nav className="flex items-center gap-1 min-w-60" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative overflow-hidden group ${
                activeSection === item.name
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-secondary hover:bg-accent/30'
              }`}
              aria-current={activeSection === item.name ? 'page' : undefined}
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
