var http = require('http');
var process = require('child_process');
//const mongo = require('./worker.js');
 
var app = http.createServer(function(req,res){
    child.send({'key':'value'})
 
    res.end('hello');
});
 
console.log('server running');
 
// se realiza el fork del nuevo proceso
var child = process.fork('worker.js');
 
// dispara el evento message hacia el fork
child.send({'key':'valor'})

console.log('proceso hijo iniciado');
 
app.listen(3000);