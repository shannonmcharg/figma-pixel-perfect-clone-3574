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
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between flex-wrap gap-6 px-8 py-8 max-md:px-5">
        <div className="flex items-center gap-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7838730ce5458cf1337e438f6765a96bfd623ad6?placeholderIfAbsent=true"
            alt="Shannon McHarg Logo"
            className="w-[51px] h-[51px] object-contain"
          />
        </div>
        
        <div className="flex-1 min-w-[332px]">
          <h1 className="text-[#BD4D24] text-[32px] font-bold leading-[1.2] tracking-[-0.96px]">
            Shannon McHarg{' '}
            <span className="text-[#0A5176] text-base font-normal">
              Songwriter
            </span>
          </h1>
        </div>

        <nav className="flex items-center gap-2 min-w-60 flex-1" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-2 py-2 rounded text-base font-normal leading-none transition-colors ${
                activeSection === item.name
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-current={activeSection === item.name ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
