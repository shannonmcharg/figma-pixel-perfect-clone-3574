import React from 'react';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Music } from '@/components/Music';
import { OpenMics } from '@/components/OpenMics';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeSection="About" />
      <main className="space-y-0">
        <About />
        <Music />
        <OpenMics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
