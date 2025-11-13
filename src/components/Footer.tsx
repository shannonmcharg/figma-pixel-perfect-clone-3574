import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="border-t border-border bg-background px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7838730ce5458cf1337e438f6765a96bfd623ad6?placeholderIfAbsent=true"
          alt="Shannon McHarg logo"
          className="w-12 h-12 object-contain"
        />
        <p className="text-muted-foreground text-xs sm:text-sm font-medium">
          © 2025 Shannon McHarg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
