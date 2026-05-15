const CACHE_NAME = "naldoa-play-v1";

const urlsToCache = [

"./",
"./index.html",
"./css/style.css",
"./js/script.js",

"./images/logo.jpg",
"./images/logo1.jpg",
"./images/main-logo.png",

"./images/icon-72.png",
"./images/icon-96.png",
"./images/icon-128.png",
"./images/icon-144.png",
"./images/icon-152.png",
"./images/icon-192.png",
"./images/icon-384.png",
"./images/icon-512.png"

];

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))

);

});

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request);

})

);

});
