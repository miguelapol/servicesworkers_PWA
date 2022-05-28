//cuando se instala el service worker, se registra en el navegador y se guarda en el cache
self.addEventListener('install', e => {
    console.log('Evento install disparado');
    console.log(e);
})
self.addEventListener('activate', e => {
    console.log('Service worker activado');
    console.log(e);
})

//evento fetch para descargar evcentos estaticos
self.addEventListener('fetch', e => {
    console.log('fetch ...',e);
})