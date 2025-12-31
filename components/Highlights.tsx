
import React from 'react';
import { config } from '../config';

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Wedding Highlights</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-8">
        Relive the beautiful moments of our celebration. We will post the wedding highlights and special clips here shortly after the ceremony for everyone to enjoy.
      </p>

      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-4 border-white aspect-video bg-navy-900/5 flex items-center justify-center">
        {config.youtubeHighlightsUrl ? (
          <iframe
            src={config.youtubeHighlightsUrl}
            title="Wedding Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <div className="p-12">
            <p className="font-serif text-2xl text-navy-700 opacity-50 italic">Highlights Coming Soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Highlights;
