
import React from 'react';
import { config } from '../config';
import { CameraIcon } from './icons';

const QrCode: React.FC<{ url: string }> = ({ url }) => {
  // Use a free public API to generate the QR code image dynamically.
  // This ensures the QR code always matches the URL in the config file.
  // Colors are customized to match the website's theme for a cohesive look.
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    url
  )}&size=200x200&bgcolor=ffffff&color=0D133C&margin=10`;

  return (
    <img
      src={qrApiUrl}
      alt="QR Code for photo upload"
      width="200"
      height="200"
      className="mx-auto"
      aria-label="Scan to upload photos"
    />
  );
};


const PhotoUpload: React.FC = () => {
  return (
    <section id="photos" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Share Your Photos</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-8">
        Scan the QR or tap the link below to upload the captured photos and videos from our special day!
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <QrCode url={config.googleDriveUploadUrl} />
        </div>
        
        <div className="text-left max-w-sm">
          <div className="flex items-center text-2xl font-bold text-navy-800 mb-4">
            <CameraIcon className="w-8 h-8 mr-3 text-gold-700" />
            <span>Steps to Upload</span>
          </div>
          
          <ol className="list-decimal list-outside ml-5 space-y-3 text-navy-700 font-medium">
            <li>Open <strong>Google Chrome</strong> app on your phone.</li>
            <li>Click on the <strong>Camera Icon</strong> (Lens) in the Chrome search bar.</li>
            <li>Point your camera at the <strong>QR Code</strong>.</li>
            <li>Tap the <strong>Drive Link</strong> that appears on your screen.</li>
            <li>Tap the <strong>'+' button</strong> in the album to add your photos and videos.</li>
          </ol>
          
          <div className="mt-8 pt-6 border-t border-gold-300/30">
            <p className="text-sm text-navy-600 mb-2 font-semibold italic">Don't want to scan?</p>
            <a 
              href={config.googleDriveUploadUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-navy-800 text-white px-6 py-2 rounded-full font-bold hover:bg-gold-700 transition-colors shadow-sm"
            >
              Click here to open the album
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500 italic">
            Having trouble? You can also email photos to <a href={`mailto:${config.contactEmail}`} className="underline font-bold text-navy-800">{config.contactEmail}</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoUpload;
