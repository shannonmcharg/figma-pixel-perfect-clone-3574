import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="border-t border-border bg-background px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-xs sm:text-sm font-medium">
          © 2025 Shannon McHarg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
