/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

/*
Dynamically cache any other local assets
Caching strategies you can use

A cacheFirst strategy will first load the resources from the cache, 
  and then download resources through the network if necessary

A networkFirst strategy will first attempt to load the assets again from the network, 
  and if the network is not available it will fall back to the cache.
*/
//self.toolbox.router.any('/*', self.toolbox.fastest);
self.toolbox.router.any('/*', self.toolbox.cacheFirst);
//self.toolbox.router.any('/*', self.toolbox.networkFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
