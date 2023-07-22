const GHPATH = 'https://customs344243562.github.io/';
// Change to a different app prefix name

// The files to make available for offline use. make sure to add 
// others to this list
const CACHED_URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/main.js`,
  `${GHPATH}/style.css`,
  `${GHPATH}/metro-all.min.v4.5.1.css`,
  `${GHPATH}/metro.min.v4.5.1.js`,
  `${GHPATH}/backgroundImage.jpeg`,
  `${GHPATH}/favicon.png`,
  `${GHPATH}/topAreaImage.jpeg`
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
		//~ const networkResponsePromise = fetch(request)

		//~ if (request.url.startsWith(self.location.origin)) {
		  //~ event.waitUntil(async function () {
			//~ const networkResponse = await networkResponsePromise

			//~ await cache.put(request, networkResponse.clone())
		  //~ }())
		//~ }

		//~ return cachedResponsePromise || networkResponsePromise
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
