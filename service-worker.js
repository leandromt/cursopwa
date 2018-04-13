let cacheName = 'notes-son-v.1.0.5';
let filesToCache = [
    './',
    'index.html',
    'css/colors.css',
    'css/styles.css',
    'js/array.observe.polyfill.js',
    'js/object.observe.polyfill.js',
    'js/scripts.js'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});


self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
        	return Promise.all(keyList.map(function(key){
        		if(key != cacheName){
        			console.log('[ServiceWorker] Removing old cache');
        			return caches.delete(key);
        		}
        	}))
        })
    );
});