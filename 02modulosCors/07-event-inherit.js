//inherits permite que un objeto herede sus caracteristicas a otro.
const EventEmiter = require('node:events').EventEmitter,
inherits=require('node:util').inherits

const Clock = function () {
  const self = this;

  setInterval(() => {
   // console.log('hola');
   self.emit('tictac')
  }, 1000);
};
inherits(Clock,EventEmiter)//aqui heredo las caracteristicas de los emisores de evento a mi reloj.

Clock.prototype.theThime = function () {
  var date = new Date(),
  hrs = date.getHours(),
  min=date.getMinutes(),
  sec=date.getSeconds(),
  msg=hrs+':'+min+':'+sec
  
  console.log(msg)

};
const cucu = new Clock();

cucu.on('tictac',function () {
    cucu.theThime()
})