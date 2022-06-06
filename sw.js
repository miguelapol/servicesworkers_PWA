
const nombreCache='apv-v6';
//cachear archivos
const archivos = [
    '/',
    'index.html',
    'error.html',
    'css/bootstrap.css',
    'css/styles.css',
    'js/app.js',
    'js/apv.js',
    'manifest.json',
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
    //en esta parte borraremos los apvs antiguos
    console.log('Service worker activado');
    e.waitUntil(
        caches.keys()
        .then(keys=>{
            // console.log(keys);
            return Promise.all(
                keys.filter(key => key !== nombreCache)
                .map(key => caches.delete(key))//borar los demas apvs
            )
        })
    )
})

//evento fetch para descargar evcentos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch', e)
   
    e.respondWith(
      caches
        .match(e.request)
        .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
      
    )
  })