let cacheName = 'notes-son-v1.0.0';
let filesToCache = [
	'',
	'index.html',
	'css/colors.css',
	'css/styles.css',
	'js/object.observe.polyfill.js',
	'js/array.observe.polyfill.js',
	'js/scripts.js',
	'service-worker.js'
];


console.log('1');

self.addEventListener('install', function(e){

	console.log('[ServiceWorker] Installer');

	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);

});


console.log('2');