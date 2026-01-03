self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('david-fit-v3').then((cache) => cache.addAll([
    './',
    './index.html',
    './manifest.json',
    './sw.js'
  ])));
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
