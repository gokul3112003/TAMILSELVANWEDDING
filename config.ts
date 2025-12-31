
// =================================================================
// EDIT YOUR WEDDING DETAILS HERE
// This file acts as a simple "Content Management System".
// Change the values below to update the website.
// =================================================================

export const config = {
  // The couple's names
  groomName: "Tamil Selvan",
  brideName: "Shanthini",
  
  // Wedding date and time
  date: "Friday, February 6, 2026",
  time: "6:00 AM to 7:30 AM",
  
  // Venue details
  venueName: "Usha Saravana Mahal",
  venueAddress: "Singarapettai - Tirupattur Road",
  venueCity: "Tirupattur, Tamil Nadu",
  
  // Map Locations for the "Wedding Locations" section
  // Note: We are using a free map (Leaflet/OSM), so no API Key is needed.
  mapLocations: [
    {
      name: "Usha Saravana Mahal (Venue)",
      description: "The Wedding Venue",
      lat: 12.2572586,
      lng: 78.6145689,
      type: "venue" // Heart Symbol
    },
    {
      name: "Groom's Residence",
      description: "RAJASEKAR HOME",
      lat: 12.252558,
      lng: 78.604129,
      type: "home" // House Symbol
    },
    {
      name: "Singarapettai Bus Stand",
      description: "Transport Hub",
      lat: 12.2542161,
      lng: 78.6179069,
      type: "transport" // Bus Emoji
    },
    {
      name: "Mariyamman Temple",
      description: "Where everything starts",
      lat: 12.254161,
      lng: 78.6171169,
      type: "temple" // Om/Temple Symbol
    },
    {
      name: "Reception 2 (Sathiyam Mahal)",
      description: "Sathiyam Mahal, Erode",
      lat: 11.3410,
      lng: 77.7172,
      type: "reception" // Purple Heart Symbol
    }
  ],

  // Reception 1 details
  reception1Date: "Thursday, February 5, 2026",
  reception1Time: "6:00 PM onwards",
  reception1Venue: "Usha Saravana Mahal",
  
  // Reception 2 details (optional)
  receptionDate: "Sunday, February 8, 2026",
  receptionTime: "6:00 PM onwards",
  receptionVenue: "Sathiyam Mahal, Erode",

  // Link for guests to upload photos
  googleDriveUploadUrl: "https://drive.google.com/drive/folders/1drvothbMrm8RujMARwxZIuUKkiGvovOW?usp=sharing",

  // Link for the YouTube highlights video
  youtubeHighlightsUrl: "https://www.youtube.com/embed/RZcJVIcPqcg",

  // Contact details for queries
  contactPerson: "Gokul Rajasekar",
  contactPhone: "9500477409",
  contactEmail: "gokulrajasekar324@gmail.com",
  contactWhatsAppUrl: "https://wa.me/qr/VWAB4ECMSH32H1",

  // Gallery Photos
  galleryPhotoUrls: [
    'https://picsum.photos/id/10/800/1200',
    'https://picsum.photos/id/20/800/600',
    'https://picsum.photos/id/30/1200/800',
    'https://picsum.photos/id/45/800/1000',
    'https://picsum.photos/id/55/800/600',
    'https://picsum.photos/id/65/1000/800',
    'https://picsum.photos/id/75/800/1200',
    'https://picsum.photos/id/85/800/600',
    'https://picsum.photos/id/95/1200/800',
  ],
};
