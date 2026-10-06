export const premiumServices = [
  { name: "Traditional Thai", duration60: 3500, duration90: 4500 },
  { name: "Aroma Therapy", duration60: 2500, duration90: 3500 },
  { name: "Swedish", duration60: 2500, duration90: 3500 },
  { name: "Deep Tissue", duration60: 3000, duration90: 4000 },
  { name: "Balinesse", duration60: 3000, duration90: 4000 },
  { name: "Lomi Lomi", duration60: 2500, duration90: 3500 },
  { name: "Dry Massage", duration60: 2000, duration90: 3000 },
  { name: "Body Scrubbing", duration60: 2500, duration90: 3500 },
];

export const luxuryServices = [
  { name: "Hot Stone Massage", duration60: 3000, duration90: 4000 },
  { name: "Peppermint Oil Massage", duration60: 3000, duration90: 4000 },
  { name: "Candle Massage", duration60: 3000, duration90: 4000 },
  { name: "Chocolate Massage", duration60: 3000, duration90: 4000 },
  { name: "Wine Massage", duration60: 3000, duration90: 4000 },
  { name: "Four Hands (Signature) Massage", duration60: 4999, duration90: 5999, isSignature: true },
];

export const bodyPolishing = [
  { name: "Chocolate Body Polishing", price: 3999 },
  { name: "Coffee Body Polishing", price: 3999 },
  { name: "Papaya Body Polishing", price: 3999 },
  { name: "Aloevera Body Polishing", price: 3999 },
  { name: "Wine Body Polishing", price: 3999 },
  { name: "Ragha D’tan Polishing", price: 4500 },
];

export const packages = [
  { price: 8000, hours: 8, validityMonths: 8, inclusions: [] },
  { price: 12000, hours: 12, validityMonths: 12, inclusions: [] },
  { 
    price: 15000, 
    hours: 15, 
    validityMonths: 15, 
    inclusions: [
      "5 hours any luxury service", 
      "10 hours any premium service", 
      "Body Scrubbing OR Head Massage with Navrathna Oil"
    ], 
    featured: true 
  },
];
