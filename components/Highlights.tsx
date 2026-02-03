import React, { useState } from 'react';
import { config } from '../config';

const Highlights: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const hasPhotos = config.highlightPhotoUrls && config.highlightPhotoUrls.length > 0;

  return (
    <section id="highlights" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Ceremony Highlights</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-10">
        The most precious moments from our special day. We've handpicked these highlights to share the joy of our union with you.
      </p>

      {hasPhotos ? (
        <div className="max-w-5xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div 
              className="md:col-span-4 lg:col-span-3 aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group relative"
              onClick={() => openLightbox(config.highlightPhotoUrls[0])}
            >
              <img 
                src={config.highlightPhotoUrls[0]} 
                alt="Main Wedding Highlight" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-serif text-xl italic">The Big Moment</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 md:col-span-4 lg:col-span-1">
              {config.highlightPhotoUrls.slice(1, 5).map((url, idx) => (
                <div 
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-white cursor-pointer group"
                  onClick={() => openLightbox(url)}
                >
                  <img 
                    src={url} 
                    alt={`Highlight ${idx + 2}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {config.youtubeHighlightsUrl && (
            <div className="mt-12">
               <a 
                href={config.youtubeHighlightsUrl.replace('embed/', 'watch?v=')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy-900 font-bold hover:text-gold-700 transition-colors gap-2"
              >
                <span className="bg-red-600 text-white p-2 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </span>
                Watch the Highlight Video on YouTube
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-4 border-white aspect-video bg-navy-900/5 flex items-center justify-center">
          <div className="p-12">
            <p className="font-serif text-2xl text-navy-700 opacity-50 italic">Highlights Coming Soon...</p>
          </div>
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <img 
            src={selectedImage} 
            alt="Highlight Detail" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
           <button 
             onClick={closeLightbox}
             className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gold-300 transition-colors p-2"
             aria-label="Close"
           >&times;</button>
        </div>
      )}
    </section>
  );
};

export default Highlights;