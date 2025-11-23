import React from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-6 animate-slide-up" aria-labelledby="about-heading">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        <div className="w-full lg:w-auto lg:min-w-60 lg:max-w-[628px] lg:flex-1 group order-1 lg:order-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0c27cf0c641e09de51f7e9b0a10eda870eec427d?placeholderIfAbsent=true"
            alt="Sketchy image of Shannon McHarg playing guitar at an open mic"
            className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-[0.75] object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <article className="w-full lg:w-auto lg:min-w-60 lg:max-w-[520px] lg:flex-1 space-y-6 sm:space-y-8 order-2 lg:order-1">
          <h2 
            id="about-heading"
            className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 sm:mb-8 lg:mb-10 relative text-left"
          >
            About
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          
          <div className="text-foreground text-lg sm:text-xl font-normal leading-relaxed tracking-normal space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg italic text-muted-foreground border-l-4 border-primary pl-4 sm:pl-6 text-left">
              "But I don't know how to make real change." Shannon writes folk punk songs to feel, reflect, and find the strength to deal with our crumbling world.
            </p>
            
            <p className="text-left">
              Anchoring complex emotions to everyday cultural references, Shannon McHarg's music invites introspection. There is a quiet rebellion in Shannon's reflective, sometimes humorous, often sociopolitical songs. Her lyrics move through feelings of disillusionment to a push for meaning, connection, and agency.
            </p>
            
            <p className="text-left">
              Her first set of releases is a series of 6 themed EP collections. The first is <em>Plastic Cuppa Fall</em>, a commentary on performative seasonal joy. The rest of the series will release over the coming months and include <em>Holidaze Pie</em>, <em>Forked</em>, <em>False Choices</em>, <em>Consumed</em>, and <em>Uncoupled</em>.
            </p>
            
            <div className="mt-8 sm:mt-10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="full-bio" className="border border-border rounded-lg overflow-hidden">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger 
                      className="flex items-center gap-3 text-primary hover:text-primary/80 font-semibold text-left py-3 px-4 group w-full bg-muted/30 hover:bg-muted/50 transition-colors"
                      aria-label="Toggle full biography"
                    >
                      <Plus className="h-5 w-5 shrink-0 group-data-[state=open]:hidden" aria-hidden="true" />
                      <Minus className="h-5 w-5 shrink-0 group-data-[state=closed]:hidden" aria-hidden="true" />
                      <span>Full bio</span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-foreground text-base leading-relaxed space-y-4 px-4 pb-4 pt-4 bg-background" role="region" aria-label="Full biography content">
                    <p className="text-left">
                      Anchoring complex emotions to everyday cultural references, Shannon McHarg's music invites introspection. There is a quiet rebellion in Shannon's reflective, sometimes humorous, often sociopolitical songs. Her lyrics move through feelings of disillusionment to a push for meaning, connection, and agency.
                    </p>
                    <p className="text-left">
                      Expressing emotions was not part of Shannon's formative years. Now, she writes to process and release emotions. She wants to help others do the same. Her guitar has become a gateway to knowing herself and sharing her discoveries with others.
                    </p>
                    <p className="text-left">
                      By day, she makes tech work for people (formally known as "human-centered design"). This human-centeredness bleeds into her music. Her musical design moves fluidly between the personal and social. It holds space for empathy as a way to "claw back" from feelings of loss and despair.
                    </p>
                    <p className="text-left">
                      As her fans move across her conceptually themed collections — <em>Plastic Cuppa Fall</em>, <em>Holidaze Pie</em>, <em>Forked</em>, <em>False Choices</em>, <em>Consumed</em>, and <em>Uncoupled</em> — they find an exploration that chronicles everything from divorce and media fragmentation to political disillusionment and the search for renewed community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mt-8 sm:mt-10">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="influences" className="border border-border rounded-lg overflow-hidden">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger 
                      className="flex items-center gap-3 text-primary hover:text-primary/80 font-semibold text-left py-3 px-4 group w-full bg-muted/30 hover:bg-muted/50 transition-colors"
                      aria-label="Toggle influences"
                    >
                      <Plus className="h-5 w-5 shrink-0 group-data-[state=open]:hidden" aria-hidden="true" />
                      <Minus className="h-5 w-5 shrink-0 group-data-[state=closed]:hidden" aria-hidden="true" />
                      <span>Influences</span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="px-4 pb-4 pt-4 bg-background" role="region" aria-label="Influences content">
                    <div className="flex flex-wrap gap-2 justify-start">
                      {['Ani DiFranco', 'Billy Bragg', 'Brandi Carlile', 'Butch Walker', 'Cake', 'The Clash', 'Daniel Johnston', 'Elvis Costello', 'Jill Sobule', 'Kacey Musgraves', 'Liz Phair', 'Margaret Glaspy', 'Patti Smith', 'Pete Yorn', 'PJ Harvey', 'The Replacements', 'Sam Phillips', 'Siouxsie and the Banshees', 'Whim', 'XTC'].map((influence) => (
                        <span
                          key={influence}
                          className="px-3 py-1.5 bg-primary/10 text-foreground rounded-full text-sm font-medium border border-primary/20"
                        >
                          {influence}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="collaborators" className="border border-border rounded-lg overflow-hidden">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger 
                      className="flex items-center gap-3 text-primary hover:text-primary/80 font-semibold text-left py-3 px-4 group w-full bg-muted/30 hover:bg-muted/50 transition-colors"
                      aria-label="Toggle collaborators"
                    >
                      <Plus className="h-5 w-5 shrink-0 group-data-[state=open]:hidden" aria-hidden="true" />
                      <Minus className="h-5 w-5 shrink-0 group-data-[state=closed]:hidden" aria-hidden="true" />
                      <span>Collaborators</span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="px-4 pb-4 pt-4 bg-background" role="region" aria-label="Collaborators content">
                    <p className="text-foreground text-base mb-4 text-left">
                      These are the humans who helped get my music out into the world.
                    </p>
                    <div className="space-y-3">
                      <div className="text-left">
                        <a href="https://judcaswell.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors underline">Jud Caswell:</a>
                        <span className="text-foreground ml-2">Production and recording</span>
                      </div>
                      <div className="text-left">
                        <a href="https://www.facebook.com/CowboyRexyDinosaur" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors underline">Rexy Dinosaur:</a>
                        <span className="text-foreground ml-2">Bass and percussion</span>
                      </div>
                      <div className="text-left">
                        <a href="https://chenardvoicestudio.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors underline">Erin Chenard:</a>
                        <span className="text-foreground ml-2">Vocal coaching</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
