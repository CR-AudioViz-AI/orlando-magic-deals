// Javari AI - Disney trip planning assistant
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body;
  
  // Knowledge base responses (will be enhanced with OpenAI integration)
  const lowerMessage = message.toLowerCase();
  
  let response = '';
  
  if (lowerMessage.includes('dvc') || lowerMessage.includes('vacation club')) {
    response = "DVC (Disney Vacation Club) rentals are a great way to save! You can stay at Deluxe resorts like Grand Floridian or Polynesian for 30-50% less than booking direct. Sites like DVC Rental Store and David's Vacation Club Rentals connect you with DVC owners who rent their points. Would you like me to explain how DVC rentals work?";
  }
  else if (lowerMessage.includes('save') || lowerMessage.includes('cheap') || lowerMessage.includes('budget')) {
    response = "Here are the best ways to save on Orlando accommodations:\n\n1. **DVC Rentals** - Stay at Deluxe resorts for 30-50% off\n2. **Good Neighbor Hotels** - Disney-approved with shuttle service\n3. **Off-Season Travel** - Sept, early Dec, Jan-Feb have lowest prices\n4. **Military/FL Resident** - Up to 30% off Disney resorts\n5. **Off-Site Hotels** - Can be 60-70% cheaper than Disney\n\nWhat's your budget and travel dates? I can give specific recommendations.";
  }
  else if (lowerMessage.includes('family') || lowerMessage.includes('kids') || lowerMessage.includes('children')) {
    response = "For families, I recommend considering:\n\n**Disney Resorts:**\n- Value: Pop Century or Art of Animation (Skyliner access!)\n- Moderate: Caribbean Beach or Riviera\n- Deluxe: Animal Kingdom Lodge (kids love the animals!)\n\n**Via DVC Rental:**\n- Beach Club or BoardWalk (walk to EPCOT)\n- Polynesian (Monorail + great pool)\n\n**Good Neighbor:**\n- Floridays Resort (full kitchens, great pools)\n\nHow many kids and what ages?";
  }
  else if (lowerMessage.includes('good neighbor')) {
    response = "Good Neighbor Hotels are Disney-approved properties that meet quality standards. Benefits vary by hotel but can include:\n\n✅ Free shuttle to Disney parks\n✅ Some offer Early Entry (30 min before park opens)\n✅ Often have larger rooms/suites\n✅ Many include breakfast\n✅ Usually 20-50% less than Disney resorts\n\nTop picks: Four Seasons, Signia Hilton Bonnet Creek, Margaritaville, Marriott Village.";
  }
  else if (lowerMessage.includes('monorail') || lowerMessage.includes('magic kingdom')) {
    response = "Want to be close to Magic Kingdom? Here are your options:\n\n**Monorail Resorts (walk or monorail to MK):**\n- Contemporary - walking distance!\n- Grand Floridian - most luxurious\n- Polynesian - great theming\n\n**DVC Rental Option:**\nYou can stay at these same resorts for 30-50% less by renting DVC points!\n\n**Budget Alternative:**\nWilderness Lodge - boat to MK, more affordable";
  }
  else {
    response = "I can help you find the perfect Orlando accommodation! I specialize in:\n\n• Comparing Disney vs DVC vs off-site options\n• Finding the best deals for your dates\n• Recommending resorts for families, couples, or groups\n• Explaining DVC rentals and how to save\n• Transportation and park access tips\n\nWhat would you like to know? Just tell me your dates, budget, and party size!";
  }
  
  res.status(200).json({ success: true, response });
}
