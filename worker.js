var context = [];
 
(function(context){
    setInterval(function(){
        var value = context.pop()
        console.log('iteraciones ' + value);
    },1000);
})(context);
 
process.on('message',function(value){
    console.log('mensaje recibido');
 
    context.push(value);
});

module.exports.process =process;