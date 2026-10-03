Sandeep HR Solutions — Step 4.1 Technical Implementation
=========================================================

Basis:
The Website Review Report lists technical/performance items 33–38:
33 PageSpeed Insights
34 image/logo WebP + dimensions + lazy loading
35 favicon, apple-touch-icon, custom 404
36 analytics + cookie notice if tracking is used
37 enforce HTTPS in GitHub Pages
38 consistent internal link format and canonicals

PACKAGE CHANGES
---------------
1. Add 404.html to the repository.
2. Add the favicon/apple-touch-icon snippet where needed. Existing favicon links
   already exist on many pages; do not duplicate them.
3. Follow image-optimization-guide.txt for Logo.webp conversion. Do not invent
   image dimensions.
4. Keep .html internal link format consistent.
5. Use https-analytics-checklist.txt for the GitHub Pages and analytics checks.

IMPORTANT
---------
- HTTPS enforcement is a GitHub Pages setting, not an HTML change.
- PageSpeed results cannot be honestly generated from source inspection alone.
- Analytics should not be installed without an intentional decision because it
  changes the site's privacy/tracking obligations.
- Do not add a cookie banner unless non-essential tracking/cookies are actually used.
- Do not change Firebase/Auth/Firestore implementation.

AFTER UPLOAD
------------
Verify:
- a deliberately invalid URL displays the custom 404 page
- favicon appears
- mobile/desktop PageSpeed results are recorded
- GitHub Pages HTTPS enforcement is enabled
- no canonical/internal-link mismatch exists
