import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Releases } from '@/components/Releases';
import { About } from '@/components/About';
import { OpenMics } from '@/components/OpenMics';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('Releases');

  useEffect(() => {
    const sections = [
      { id: 'releases', name: 'Releases' },
      { id: 'about', name: 'About' },
      { id: 'open-mics', name: 'Open Mics' },
      { id: 'connect', name: 'Connect' }
    ];

    let currentSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSections.add(entry.target.id);
          } else {
            currentSections.delete(entry.target.id);
          }
        });

        // Find the topmost visible section
        if (currentSections.size > 0) {
          for (const sectionData of sections) {
            if (currentSections.has(sectionData.id)) {
              setActiveSection(sectionData.name);
              break;
            }
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Handle smooth scroll with offset for sticky header
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Immediately update active section on click
            const section = sections.find(s => s.id === targetId);
            if (section) {
              setActiveSection(section.name);
            }
            
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      observer.disconnect();
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
