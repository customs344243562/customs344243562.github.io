// Change to a different app prefix name

// The files to make available for offline use. make sure to add 
// others to this list
const CACHED_URLS = [
  "/",
  "/index.html",
  "/main.js",
  "/style.css",
  "/metro-all.min.v4.5.1.css",
  "/metro.min.v4.5.1.js",
  "/backgroundImage.jpeg",
  "/favicon.png",
  "/topAreaImage.jpeg",
  "https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css",
  "https://cdn.korzh.com/metroui/v4.5.1/js/metro.min.js",
  "https://cdn.korzh.com/metroui/v4.5.1/mif/metro.woff"
]

const CACHE_NAME = 'hbe_cache'

// Open cache on install.
self.addEventListener('install', event => {
  event.waitUntil(async function () {
    const cache = await caches.open(CACHE_NAME)

    await cache.addAll(CACHED_URLS)
  }())
})

// Cache and update with stale-while-revalidate policy.
self.addEventListener('fetch', event => {
  try {
	  const { request } = event

	  // Prevent Chrome Developer Tools error:
	  // Failed to execute 'fetch' on 'ServiceWorkerGlobalScope': 'only-if-cached' can be set only with 'same-origin' mode
	  //
	  // See also https://stackoverflow.com/a/49719964/1217468
	  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
		return
	  }

	  event.respondWith(async function () {
		const cache = await caches.open(CACHE_NAME)

		const cachedResponsePromise = await cache.match(request)
//		 const networkResponsePromise = fetch(request)

//		 if (request.url.startsWith(self.location.origin)) {
//		   event.waitUntil(async function () {
//			 const networkResponse = await networkResponsePromise
//
		//	 await cache.put(request, networkResponse.clone())
		//   }())
		// }

		 //return cachedResponsePromise || networkResponsePromise
		return cachedResponsePromise
	  }())
	}
	catch {
		return
	}
})

// Clean up caches other than current.
self.addEventListener('activate', event => {
  event.waitUntil(async function () {
    const cacheNames = await caches.keys()

    await Promise.all(
      cacheNames.filter((cacheName) => {
        const deleteThisCache = cacheName !== CACHE_NAME

        return deleteThisCache
      }).map(cacheName => caches.delete(cacheName))
    )
  }())
})
	
