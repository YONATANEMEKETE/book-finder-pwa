import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { cacheNames, clientsClaim, setCacheNameDetails } from 'workbox-core';
import { registerRoute, setDefaultHandler } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

declare const self: ServiceWorkerGlobalScope;

setCacheNameDetails({
  prefix: 'my-app',
  precache: 'precache',
  runtime: 'runtime',
  suffix: 'v1',
}); // cache names for this app precache and runtime caches will be my-app-precache-v1 and my-app-runtime-v1

console.log(cacheNames.prefix);

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();
clientsClaim();

const expPlugin = new ExpirationPlugin({
  maxEntries: 20,
  maxAgeSeconds: 60 * 60 * 24, // 24 hours
});

registerRoute(
  ({ url }) => url.origin === 'https://openlibrary.org',

  async ({ request }) => {
    try {
      const netResponse = await fetch(request);
      if (netResponse.ok) {
        const cache = await caches.open('my-app-apicalls');
        cache.put(request, netResponse.clone());
        return netResponse;
      } else {
        const cacheResponse = await caches.match(request);
        if (cacheResponse) {
          return cacheResponse;
        } else {
          return new Response('Network error and no cached data available.', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        }
      }
    } catch (error) {
      console.log('error fetching books', error);
      const cacheResponse = await caches.match(request);
      if (cacheResponse) {
        return cacheResponse;
      } else {
        return new Response('Network error and no cached data available.', {
          status: 503,
          statusText: 'Service Unavailable',
        });
      }
    }
  }
);

registerRoute(
  ({ request }) => {
    console.log(request.url, 'handling image requests');
    return request.destination === 'image';
  },

  new CacheFirst({
    cacheName: 'my-app-image',
    plugins: [expPlugin],
  })
);

setDefaultHandler(new NetworkFirst());
