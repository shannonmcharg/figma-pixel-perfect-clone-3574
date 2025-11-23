import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Releases } from '@/components/Releases';
import { About } from '@/components/About';
import { OpenMics } from '@/components/OpenMics';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('Music');

  useEffect(() => {
    const sections = [
      { id: 'releases', name: 'Music' },
      { id: 'about', name: 'About' },
      { id: 'open-mics', name: 'Open Mics' },
      { id: 'connect', name: 'Connect' }
    ];

    // Helpers for consistent header-aware scrolling
    const getHeaderOffset = () => {
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 80;
      // Add small spacing so H2 is fully visible below shadow
      return headerHeight + 16;
    };

    let isProgrammaticScroll = false;

    const handleScroll = () => {
      if (isProgrammaticScroll) return;

      const headerOffset = getHeaderOffset();
      const scrollPosition = window.scrollY + headerOffset;
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (isAtBottom) {
        // Always highlight the last section when at bottom
        setActiveSection('Connect');
        return;
      }

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle smooth scroll with offset for sticky header
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Immediately update active section on click
      const section = sections.find(s => s.id === targetId);
      if (section) {
        setActiveSection(section.name);
      }

      isProgrammaticScroll = true;
      const headerOffset = getHeaderOffset();
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Re-enable scroll detection after animation completes
      window.setTimeout(() => {
        isProgrammaticScroll = false;
        handleScroll();
      }, 600);
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} />
      <main className="space-y-0">
        <Releases />
        <About />
        <OpenMics />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
