const CACHE_NAME = 'snoopi-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/static/css/layout.css',
  '/static/css/animation.css',
  '/static/css/media.css',
  '/static/swiper.min.js',
  '/static/swiper.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 