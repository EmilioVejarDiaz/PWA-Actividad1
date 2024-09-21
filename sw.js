console.log('SW Hola mundo !!');

self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
});

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);

    /*if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: blue;
                background-color: #000;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }*/

})

//en el service worker se dice que si se cumple el evento se instale el worker
//el service worker se usa para instalarse a si mismo y volver una app web a progresiva
