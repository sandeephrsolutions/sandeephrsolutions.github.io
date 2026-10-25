/* Sandeep Solutions v10 service worker — cache version bumped to refresh updated site pages. */
const CACHE = "sandeep-solutions-v10";
const ASSETS = [
  "/", "/index.html", "/about.html", "/services.html", "/employers.html", "/jobs.html", "/contact.html",
  "/hr-recruitment.html", "/business-consultancy.html", "/restaurant-solutions.html", "/documentation-setup.html",
  "/candidate-login.html", "/candidate-register.html", "/candidate-dashboard.html",
  "/admin-login.html", "/admin-dashboard.html", "/admin-jobs.html", "/admin-applications.html",
  "/admin-candidates.html", "/admin-employers.html", "/privacy.html", "/terms.html", "/disclaimer.html",
  "/offline.html", "/styles.css", "/brand_v3.css", "/step3_4.css", "/step3_5.css", "/step3_6.css",
  "/step3_7_mobile.css", "/validation-ux.css", "/app.js", "/firebase-config.js",
  "/assets/logo.png", "/Logo.png", "/logo.png", "/favicon.ico", "/site.webmanifest"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response && response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === "navigate" ? caches.match("/offline.html") : undefined))));
});
