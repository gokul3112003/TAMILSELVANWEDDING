
import React, { useEffect, useRef } from 'react';
import { config } from '../config';

// Define global L for Leaflet
declare global {
  interface Window {
    L: any;
  }
}

const LocationsMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  // Helper function to create SVG Pin strings
  const createPinSvg = (pinColor: string, innerContent: string) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="40" height="50">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path fill="${pinColor}" filter="url(#shadow)" d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0s192 86 192 192z"/>
      <circle cx="192" cy="192" r="110" fill="white"/>
      <g transform="translate(192, 192)">
        ${innerContent}
      </g>
    </svg>
  `;

  // Icons Definitions
  const homeIconSvg = createPinSvg('#dc2626', `
    <path fill="#1a1a1a" transform="translate(-80, -70) scale(0.32)" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
  `);
  const venueIconSvg = createPinSvg('#D81B60', `
    <path fill="#D81B60" transform="translate(-85, -80) scale(0.34)" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
  `);
  const templeIconSvg = createPinSvg('#FB8C00', `
    <text x="0" y="40" text-anchor="middle" font-size="140" fill="#E65100" font-family="serif" font-weight="bold">🕉</text>
  `);
  const transportIconSvg = createPinSvg('#1E88E5', `
    <text x="0" y="45" text-anchor="middle" font-size="120" fill="#0D47A1">🚌</text>
  `);
  const receptionIconSvg = createPinSvg('#9C27B0', `
    <path fill="#9C27B0" transform="translate(-85, -80) scale(0.34)" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
  `);

  useEffect(() => {
    if (!window.L) return;
    if (mapInstance.current) return;

    // --- Dynamic Zoom Logic ---
    const now = new Date();
    // Thresholds: Wedding ends end of Feb 6 (start of Feb 7). Reception 2 is Feb 8.
    const weddingEnd = new Date('2026-02-07T00:00:00');
    const receptionEnd = new Date('2026-02-09T00:00:00');

    let initialCenter: [number, number] = [11.8, 78.2];
    let initialZoom = 8;

    if (now < weddingEnd) {
      // Focus on Singarapettai region (Wedding)
      initialCenter = [12.254, 78.614];
      initialZoom = 15;
    } else if (now < receptionEnd) {
      // Focus on Erode region (Reception 2)
      initialCenter = [11.3410, 77.7172];
      initialZoom = 16;
    } else {
      // From Feb 9th onwards, show both regions
      initialCenter = [11.8, 78.2];
      initialZoom = 8;
    }

    const map = window.L.map(mapRef.current).setView(initialCenter, initialZoom);
    mapInstance.current = map;

    // Layering
    window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);

    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd'
    }).addTo(map);

    const createLeafletIcon = (svgString: string) => {
      return window.L.divIcon({
        className: 'custom-pin',
        html: svgString,
        iconSize: [40, 50],
        iconAnchor: [20, 50],
        popupAnchor: [0, -45]
      });
    };

    const icons = {
      home: createLeafletIcon(homeIconSvg),
      venue: createLeafletIcon(venueIconSvg),
      temple: createLeafletIcon(templeIconSvg),
      transport: createLeafletIcon(transportIconSvg),
      reception: createLeafletIcon(receptionIconSvg),
      standard: createLeafletIcon(venueIconSvg)
    };

    config.mapLocations.forEach((location) => {
      // @ts-ignore
      const icon = icons[location.type] || icons.standard;
      const marker = window.L.marker([location.lat, location.lng], { icon: icon }).addTo(map);

      const popupContent = `
        <div style="font-family: 'Poppins', sans-serif; text-align: center; min-width: 200px;">
          <h3 style="color: #121A5A; margin: 0 0 5px 0; font-weight: 700; font-size: 16px;">${location.name}</h3>
          <p style="color: #555; font-size: 13px; margin: 0 0 10px 0;">${location.description}</p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}" 
             target="_blank" 
             style="display: inline-block; background-color: #121A5A; color: #FFF; padding: 8px 16px; text-decoration: none; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 5px;">
             Get Directions
          </a>
        </div>
      `;
      marker.bindPopup(popupContent);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="locations" className="text-center relative z-10">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-8">Wedding Locations</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-8">
        We've marked our special venues. The map will automatically update its focus to show where the celebration is currently happening!
      </p>
      
      <div className="w-full px-4 md:px-0">
        <div 
          ref={mapRef} 
          className="w-full h-[550px] rounded-[15px] shadow-lg border-4 border-white overflow-hidden mx-auto z-0"
        />
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#D81B60] border border-white shadow-sm flex items-center justify-center text-[8px] text-white">♥</div>
            <span className="text-sm font-medium text-navy-800">Wedding Venue</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#9C27B0] border border-white shadow-sm flex items-center justify-center text-[8px] text-white">♥</div>
            <span className="text-sm font-medium text-navy-800">Reception 2 (Erode)</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FB8C00] border border-white shadow-sm flex items-center justify-center text-[10px] text-white">🕉</div>
            <span className="text-sm font-medium text-navy-800">Mariyamman Temple</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#dc2626] border border-white shadow-sm"></div>
            <span className="text-sm font-medium text-navy-800">Groom's Home</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1E88E5] border border-white shadow-sm flex items-center justify-center text-[10px] text-white">🚌</div>
             <span className="text-sm font-medium text-navy-800">Bus Stand</span>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
