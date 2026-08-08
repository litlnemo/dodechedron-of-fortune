// The Dodechedron of Fortune — offline cache
// Bump CACHE_NAME (e.g. 'dodec-v2') any time you change any file listed
// below, so returning visitors get the update instead of a stale cache.
const CACHE_NAME = "dodec-v1";

const PRECACHE_URLS = [
  "dodec1.html",
  "credits.html",
  "dodec1.css",
  "dodec1.js",
  "dodec-questions.js",
  "dodec-answers.js",
  "typeface-toggle.js",
  "manifest.json",
  "fonts/im-fell-english-latin-400-normal.woff2",
  "fonts/im-fell-english-latin-400-italic.woff2",
  "assets/cornice-top.webp",
  "assets/base.webp",
  "assets/angel-die.webp",
  "assets/column-left-cap.png",
  "assets/column-left-foot.png",
  "assets/column-left-shaft-tile.png",
  "assets/column-right-cap.png",
  "assets/column-right-foot.png",
  "assets/column-right-shaft-tile.png",
  "assets/die-1.png",
  "assets/die-2.png",
  "assets/die-3.png",
  "assets/die-4.png",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request);
    })
  );
});
