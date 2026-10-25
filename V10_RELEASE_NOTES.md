# Sandeep Solutions Website — v10 Release Notes

## Included
- Consolidated website from the latest Core Services detail-page package.
- Four dedicated core service pages and their image/title/CTA links from Services.
- Candidate login/registration contrast and small-screen layout correction.
- Shared `app.js` to resolve existing local script references and apply conservative progressive enhancements.
- Updated service worker cache version and offline navigation fallback.
- Updated sitemap with all four service detail pages.

## Validation performed
- ZIP archive integrity and required page presence checks.
- Local reference audit; remaining findings are listed in the report.
- Confirmed candidate CSS override, service worker cache version and sitemap updates.

## Not performed / not claimed
- No live browser/device rendering, Lighthouse audit, Firebase end-to-end testing, deployment, or penetration test.
- Existing Firebase config and Firestore rules are preserved; review them in Firebase Console before production.
- Verify service-worker behavior on the hosted HTTPS site.
