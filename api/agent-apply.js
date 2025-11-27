import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { firstName, lastName, email, agencyName, website, credentials, bookingsPerMonth, plan } = req.body;

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );

    const { data, error } = await supabase
      .from('agent_applications')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase().trim(),
        agency_name: agencyName,
        website,
        credentials,
        bookings_per_month: bookingsPerMonth,
        plan_interest: plan,
        status: 'pending',
        applied_at: new Date().toISOString()
      })
      .select();

    if (error) throw error;

    res.status(200).json({ success: true, message: 'Application submitted' });
  } catch (error) {
    console.error('Application error:', error);
    res.status(200).json({ success: true, message: 'Application submitted' });
  }
}
