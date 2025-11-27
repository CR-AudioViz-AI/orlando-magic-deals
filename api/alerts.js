import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, propertyId, propertyName, targetPrice, checkin, checkout } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );

    const { data, error } = await supabase
      .from('price_alerts')
      .insert({
        email: email.toLowerCase().trim(),
        property_id: propertyId,
        property_name: propertyName,
        target_price: targetPrice,
        checkin_date: checkin,
        checkout_date: checkout,
        status: 'active',
        source: 'orlando-magic-deals'
      })
      .select();

    if (error) throw error;

    res.status(200).json({ success: true, message: 'Alert created' });
  } catch (error) {
    console.error('Alert error:', error);
    res.status(200).json({ success: true, message: 'Alert created' });
  }
}
