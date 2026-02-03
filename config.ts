
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
  mapLocations: [
    {
      name: "Usha Saravana Mahal (Venue)",
      description: "The Wedding Venue",
      lat: 12.2572586,
      lng: 78.6145689,
      type: "venue"
    },
    {
      name: "Groom's Residence",
      description: "RAJASEKAR HOME",
      lat: 12.252558,
      lng: 78.604129,
      type: "home"
    },
    {
      name: "Singarapettai Bus Stand",
      description: "Transport Hub",
      lat: 12.2542161,
      lng: 78.6179069,
      type: "transport"
    },
    {
      name: "Mariyamman Temple",
      description: "Where everything starts",
      lat: 12.254161,
      lng: 78.6171169,
      type: "temple"
    },
    {
      name: "Reception 2 (Sathiyam Mahal)",
      description: "Sathiyam Mahal, Erode",
      lat: 11.3410,
      lng: 77.7172,
      type: "reception"
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

  // Link for the YouTube highlights video (Optional)
  youtubeHighlightsUrl: "https://www.youtube.com/embed/RZcJVIcPqcg",

  // Contact details for queries
  contactPerson: "Gokul Rajasekar",
  contactPhone: "9500477409",
  contactEmail: "gokulrajasekar324@gmail.com",
  contactWhatsAppUrl: "https://wa.me/qr/VWAB4ECMSH32H1",

  // Gallery Photos (Main Guest Gallery)
  // Cleaned up list to remove repeated images.
  galleryPhotoUrls: [
    'https://lh3.googleusercontent.com/d/1E1ftJVOrVlmiS0x3i-e-ANPyX5yuJGqX', // Temple steps
    'https://lh3.googleusercontent.com/d/1ysTbLp5o6dZG0xD_eGQUQBxF3BJVU7xg', // Beach sitting
    'https://lh3.googleusercontent.com/d/16kr8lMp0X-PhjsduOpVGaDqKCoX_RWUW', // Beach standing
    'https://lh3.googleusercontent.com/d/1aXO2_mfQwdnDreDRPC_vk6aQsv3IRLQG', // Blue dress (Only once)
    'https://lh3.googleusercontent.com/d/1lFz41ZVuapujASR9QcN6OtuLLma7lk-N', // Red shirt pillar
    'https://lh3.googleusercontent.com/d/1X6zWcMlxBIKwuLpOTbqWeCLVD7Yz_Uaz', // Garden
    'https://lh3.googleusercontent.com/d/1iIIqE5MBcK4vXxPhTQcGfyMISsTR33uM', // Extra 1
    'https://lh3.googleusercontent.com/d/17QnCDVpD-yFC0AJUZqdlSAlQaibVlOyT', // Extra 2
    'https://lh3.googleusercontent.com/d/1pgIGwU8GJiQgr8fxqrYg72qSBBMbgZlE', // Extra 3
  ],

  // Fix: Added highlightPhotoUrls property to support the Highlights component and resolve TypeScript errors
  highlightPhotoUrls: [
    'https://lh3.googleusercontent.com/d/1E1ftJVOrVlmiS0x3i-e-ANPyX5yuJGqX',
    'https://lh3.googleusercontent.com/d/1ysTbLp5o6dZG0xD_eGQUQBxF3BJVU7xg',
    'https://lh3.googleusercontent.com/d/16kr8lMp0X-PhjsduOpVGaDqKCoX_RWUW',
    'https://lh3.googleusercontent.com/d/1aXO2_mfQwdnDreDRPC_vk6aQsv3IRLQG',
    'https://lh3.googleusercontent.com/d/1lFz41ZVuapujASR9QcN6OtuLLma7lk-N',
  ],
};
