

import React, { useState, useEffect } from 'react';
import { config } from '../config';
import { WhatsAppIcon } from './icons';

const Footer: React.FC = () => {
  // Parse the wedding date from the config file. We'll use the start time.
  const weddingDateTimeString = `${config.date} ${config.time.split(' to ')[0]}`;
  const targetDate = new Date(weddingDateTimeString);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up a timer to update the countdown every second.
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the timer when the component unmounts.
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map(interval => {
    const value = timeLeft[interval];
    // Don't render if value is not a number (e.g., when time is up)
    if (isNaN(value)) return null;

    return (
      <div key={interval} className="flex flex-col items-center justify-center p-2 md:p-4 min-w-[70px] md:min-w-[90px] bg-white/50 rounded-lg shadow-inner">
        <span className="font-serif text-4xl md:text-5xl text-navy-900 tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
        <span className="mt-1 text-xs uppercase tracking-wider text-gold-700 font-medium">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <footer className="text-center py-12 mt-12 border-t border-gold-500/20">
      <h3 className="font-serif text-3xl text-navy-800 mb-8">See You Soon!</h3>
      
      {Object.keys(timeLeft).length > 0 ? (
        <div className="flex justify-center gap-3 md:gap-6">
          {timerComponents}
        </div>
      ) : (
        <p className="font-serif text-2xl text-gold-700 animate-pulse">The big day is here!</p>
      )}

      {/* Contact Section */}
      <div className="mt-12 bg-white/30 py-6 px-4 rounded-lg inline-block mx-auto max-w-md">
        <p className="font-serif text-xl text-navy-900 mb-2 font-bold border-b border-gold-300 pb-2 inline-block">For Queries Contact</p>
        <div className="mt-2 text-navy-800">
           <p className="font-bold text-lg">{config.contactPerson}</p>
           <p className="mt-1">
             <a href={`tel:${config.contactPhone}`} className="hover:text-gold-700 hover:underline transition-colors flex items-center justify-center gap-2">
               {config.contactPhone}
             </a>
           </p>
           <p className="mt-1">
             <a href={`mailto:${config.contactEmail}`} className="hover:text-gold-700 hover:underline transition-colors break-all">
               {config.contactEmail}
             </a>
           </p>

           {/* WhatsApp Section */}
           <div className="mt-6 pt-6 border-t border-gold-300/30 flex flex-col items-center">
             <a 
               href={config.contactWhatsAppUrl} 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center text-green-700 font-bold hover:text-green-800 transition-colors bg-white/50 px-4 py-2 rounded-full shadow-sm hover:bg-white"
             >
               <WhatsAppIcon className="w-5 h-5 mr-2" />
               Chat on WhatsApp
             </a>
           </div>

        </div>
      </div>

      <div className="mt-12">
        <p className="font-serif text-2xl text-navy-900">
          {config.groomName} &amp; {config.brideName}
        </p>
        <p className="text-navy-700 mt-2">
          {new Date(config.date).getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;