Netlify Edge Function cutoff package

Cutoff: 2026-11-27 23:30 Asia/Taipei (15:30 UTC)

IMPORTANT: Deploy the entire FOLDER via a Netlify method that supports Edge Functions (Git-connected repository or Netlify CLI). Drag-and-drop static site uploads may not deploy the Edge Function. Check Netlify deploy logs for edge function bundling.

Deploy via Git: upload the contents of this folder to a GitHub repository; connect repository in Netlify; publish directory '.'; deploy. Keep existing Netlify site if possible by connecting the repo in Site configuration. Check the edge function appears in deployment.

Test: verify before cutoff the site works, and in Netlify deploy logs verify edge function. To test cutoff before the real date, temporarily change the timestamp to a past date in election-cutoff.js, deploy, confirm only end page is served, then restore timestamp and redeploy. Do not leave test version running.

Note: this protects normal live requests to Netlify, not copies already downloaded, old caches, screenshots, or independent reposts. For stronger certainty deploy an end-only site early, and verify all paths and devices. Do not rely on local JavaScript time alone.
