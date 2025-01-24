import { clientsClaim, setCacheNameDetails, cacheNames } from 'workbox-core';
import { logger } from 'workbox-core/_private';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
// import { registerRoute } from 'workbox-routing';

declare const self: ServiceWorkerGlobalScope;

self.skipWaiting(); // force activation
clientsClaim(); // force control of the open pages

setCacheNameDetails({
  // configure cache names for our app
  prefix: 'book-finder',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'google-analytics',
});

console.log(cacheNames.precache); // access the cache for the app we are working on currently

logger.debug('all assets are cached'); // help us debug our app

cleanupOutdatedCaches();

precacheAndRoute([
  { url: '/index.html', revision: '1' },
  { url: '/src/main.tsx', revision: '2' },
  { url: '/src/App.tsx', revision: '3' },
  { url: '/src/index.css', revision: '9' },
  { url: '/src/states/globalStates.ts', revision: '4' },
  { url: '/src/lib/fetchData.ts', revision: '5' },
  { url: '/src/lib/Router.tsx', revision: '6' },
  { url: '/src/assets/icons/apple-touch-icon.png', revision: '7' },
  { url: '/src/assets/icons/favicon-32x32.png', revision: '8' },
]); //use cache first to serve them faster
