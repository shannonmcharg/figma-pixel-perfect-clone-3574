import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Newsletter: React.FC = () => (
  <section
    id="newsletter"
    className="bg-background py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8"
    aria-labelledby="newsletter-heading"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="newsletter-heading"
        className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 relative text-left"
      >
        Newsletter
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full" aria-hidden="true" />
      </h2>

      <div>
        <iframe
          src="https://buttondown.com/shannonmchargsongs/archive/"
          title="Shannon McHarg newsletter archive"
          className="w-full h-[600px] border-0 bg-background"
          loading="lazy"
        />
        <a
          href="https://buttondown.com/shannonmchargsongs/archive/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-secondary underline underline-offset-4 mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          All newsletters <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);