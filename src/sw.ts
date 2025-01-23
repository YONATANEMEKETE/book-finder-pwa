import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

declare let self: ServiceWorkerGlobalScope; // we need to define self scope

// self.skipWaiting();
clientsClaim();

cleanupOutdatedCaches(); // to clean up old caches when new version is installed

precacheAndRoute(self.__WB_MANIFEST);
