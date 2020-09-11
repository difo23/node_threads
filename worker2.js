var context = [];
 

   
        //var value = context.pop()
        //console.log('iteraciones: ');
        //console.dir(value)
  
var getting = function(){
    var value = context.pop()
    console.log('iteraciones ');
    // console.dir(value)
}

process.on('message',function(value){
    console.log('mensaje recibido');
    //console.dir(value)
    context.push(value);
    getting()
});

//module.exports.process =process;
