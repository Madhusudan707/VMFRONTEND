const CACHE_NAME = "version-1";
const urlsToCache = ['index.html','offline.html'];

const self = this;
// install SW
self.addEventListener('install',(event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )

})
// Listen for requests 
self.addEventListener('fetch',(event) => {
    event.respondWith(
        // match all the request that our page is recieving(i.e request to show image, request for api call)
        caches.match(event.request)
        .then(() => {
            // return fetch of that request(i.e incase of api calls we always fetch new data)
            return fetch(event.request)
                .catch(() => {
                    caches.match('offline.html')
                })
        })
    )
});
// Activate the SW
self.addEventListener('activate',(event) => {
    // remove the previous versions of caches and store the only the whiteListed version .
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        // wait untill we got the cache keys 
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
    
})