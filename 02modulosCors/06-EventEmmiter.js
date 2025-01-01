//funciona a traves del patron de diseño observador.
const EventEmiter = require('node:events').EventEmitter,
  pup = new EventEmiter();

pup.on('myevent', function (msg) {
  console.log(msg);
});


//el evento once se ejecuta una sola vez al contrario de on que se ejecuta varias veces
pup.once('myevent',function(msg) {
    console.log('se emite la primera vez')
})

//el metodo emit nos permite precisamente emitir un evento.
pup.emit('myevent','Soy un emisor de eventos')
pup.emit('myevent','volviendo a emitir')
pup.removeAllListeners('myevent')
pup.removeAllListeners('myevent','colviendo a emitir por tercera vez')