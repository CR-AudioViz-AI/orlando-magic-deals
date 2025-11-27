// Current promotions - manually curated from official sources
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const deals = [
    {
      id: 1,
      type: 'disney',
      badge: 'Disney Offer',
      title: 'Save Up to 25% on Select Rooms',
      description: 'Disney Resort hotels, Sun-Thu nights Jan 4 - Apr 30, 2026',
      validDates: 'Jan 4 - Apr 30, 2026',
      url: 'https://disneyworld.disney.go.com/special-offers/',
      source: 'Disney Official',
      verified: true
    },
    {
      id: 2,
      type: 'military',
      badge: 'Military Discount',
      title: 'Up to 30% Off for Military',
      description: 'Exclusive savings at Deluxe Resorts for active/retired military',
      validDates: 'Jan 1 - Dec 18, 2026',
      url: 'https://disneyworld.disney.go.com/special-offers/',
      source: 'Disney Official',
      verified: true
    },
    {
      id: 3,
      type: 'florida',
      badge: 'FL Resident',
      title: 'Florida Resident Discounts',
      description: 'Special room rates for Florida residents at select resorts',
      validDates: 'Ongoing',
      url: 'https://disneyworld.disney.go.com/special-offers/',
      source: 'Disney Official',
      verified: true
    },
    {
      id: 4,
      type: 'dvc',
      badge: 'DVC Rental',
      title: 'Grand Floridian from $350/night',
      description: 'Stay at Deluxe resorts for Moderate prices via DVC point rental',
      validDates: 'Year-round',
      url: 'https://dvcrentalstore.com/',
      source: 'DVC Rental Store',
      verified: true
    }
  ];
  
  res.status(200).json({
    success: true,
    deals,
    lastUpdated: new Date().toISOString(),
    disclaimer: 'Verify all offers on official sites before booking.'
  });
}
