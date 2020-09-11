//var http = require('http');
var process = require('child_process');
//const mongo = require('./worker.js');
 

//child.send({'key':'value'})
console.log('server running');
 
// se realiza el fork del nuevo proceso
var child = process.fork('worker2.js');
 
// dispara el evento message hacia el fork
child.send({'key':'valor'})

console.log('proceso hijo iniciado');
 
//app.listen(3000);