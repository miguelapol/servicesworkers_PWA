if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado=>console.log('Se instalo correctamente el service worker', registrado))
        .catch(error=>console.log('No se pudo instalar el service worker', error));
}else{
    console.log('No soportado');
}
    