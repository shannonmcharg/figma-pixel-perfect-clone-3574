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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section) {
              setActiveSection(section.name);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
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
