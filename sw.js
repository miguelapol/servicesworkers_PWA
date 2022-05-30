
const nombreCache='apv-v1';
//cachear archivos
const archivos = [
    '/',
    'index.html',
    'css/bootstrap.css',
    'css/styles.css',
    'js/app.js',
    'js/apv.js',
    'manifest.json'
];

//cuando se instala el service worker, se registra en el navegador y se guarda en el cache
self.addEventListener('install', e => {
    console.log('Evento install disparado');
    e.waitUntil(
        caches.open(nombreCache)
        .then(cache => {
            console.log('cacheando archivos');
            cache.addAll(archivos);
        })

    )
});

self.addEventListener('activate', e => {
    console.log('Service worker activado');
    console.log(e);
})

//evento fetch para descargar evcentos estaticos
self.addEventListener('fetch', e => {
    console.log('fetch ...',e);
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            return res;
})
        
    );

})