import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const FEED_URL = 'https://buttondown.com/shannonmchargsongs/rss';
const ARCHIVE_URL = 'https://buttondown.com/shannonmchargsongs/archive/';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const feedRes = await fetch(FEED_URL, { cache: 'no-store' });
    if (!feedRes.ok) throw new Error(`feed responded ${feedRes.status}`);
    const xml = await feedRes.text();

    // First <link> pointing into the archive is the newest issue.
    const match = xml.match(
      /<link>(https:\/\/buttondown\.com\/shannonmchargsongs\/archive\/[^<]+)<\/link>/
    );
    const latestUrl = match?.[1];

    return new Response(
      JSON.stringify({ url: latestUrl ?? ARCHIVE_URL }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (err) {
    console.error('latest-newsletter error:', err);
    // Fall back to the archive list so the embed always has something to show.
    return new Response(JSON.stringify({ url: ARCHIVE_URL }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  }
});
