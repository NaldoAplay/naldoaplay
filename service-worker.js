// Service Worker Minimalista para habilitar a instalação do PWA
const CACHE_NAME = 'naldoa-play-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Intercepta as requisições para o app rodar liso e cumprir os requisitos do Chrome
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
