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

    return () => observer.disconnect();
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
