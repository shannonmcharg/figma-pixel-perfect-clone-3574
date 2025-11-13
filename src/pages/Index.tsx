import React from 'react';
import { Header } from '@/components/Header';
import { Releases } from '@/components/Releases';
import { About } from '@/components/About';
import { Music } from '@/components/Music';
import { OpenMics } from '@/components/OpenMics';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeSection="About" />
      <main className="space-y-0">
        <Releases />
        <About />
        <Music />
        <OpenMics />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
