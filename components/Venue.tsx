
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { config } from '../config';
import { MapPinIcon } from './icons';

const Venue: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${config.venueName}, ${config.venueAddress}, ${config.venueCity}`)}`;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // Target all direct children of the section for the animation
    const elementsToAnimate = Array.from(sectionElement.children);

    // Use GSAP context for safe cleanup and automatic reversion
    const ctx = gsap.context(() => {
      // Set initial state for the elements: invisible and slightly shifted down
      gsap.set(elementsToAnimate, { autoAlpha: 0, y: 50 });

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Animate main section elements (text, map container, button)
            gsap.to(elementsToAnimate, {
              duration: prefersReducedMotion ? 0.01 : 1.2,
              autoAlpha: 1,
              y: 0,
              stagger: 0.2,
              ease: 'power3.out',
            });
            
            // Animate only once
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px -20% 0px", threshold: 0 }
      );

      if (sectionElement) {
        observer.observe(sectionElement);
      }
      
      return () => {
        if (sectionElement) {
            observer.disconnect();
        }
      }
    }, sectionRef);

    // Cleanup function that runs when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section id="venue" className="text-center" ref={sectionRef}>
      <p className="font-serif text-gold-700 text-lg uppercase tracking-widest mb-2 font-bold">The Venue</p>
      
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group mb-6"
        title="Open in Google Maps"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-navy-900 group-hover:text-gold-700 transition-colors underline decoration-gold-300 underline-offset-8">
          {config.venueName}
        </h2>
      </a>

      <div className="flex items-center justify-center text-lg mb-8 text-navy-700">
        <MapPinIcon className="w-6 h-6 mr-2 text-gold-700" />
        <p>{config.venueAddress}, {config.venueCity}</p>
      </div>
      
      {/* 
        The map is now displayed in the standard interactive map section below.
        Keeping this section focused on the specific Venue details and call to action. 
      */}

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gold-700 hover:text-white transition-all duration-300 transform hover:scale-105"
      >
        Get Directions
      </a>
    </section>
  );
};

export default Venue;