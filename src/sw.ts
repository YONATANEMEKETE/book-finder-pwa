import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { cacheNames, clientsClaim, setCacheNameDetails } from 'workbox-core';

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
