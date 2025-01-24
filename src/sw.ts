import {
  skipWaiting,
  clientsClaim,
  setCacheNameDetails,
  cacheNames,
} from 'workbox-core';
import { logger } from 'workbox-core/_private';

skipWaiting(); // force activation
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
