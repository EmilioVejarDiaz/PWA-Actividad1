if(navigator.serviceWorker){
    
    navigator.serviceWorker.register('./sw.js');
}
//el manifest solo da las propiedades
//el index se likea al manifest y se ejecuta el script, 
//el app js pregunta al navegador si soporta el service worker y lo registra si si