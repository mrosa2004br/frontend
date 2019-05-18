var menorNota = Math.min(6,4,8,10,4,3,8);
var maiorNota = Math.max(6,4,8,10,4,3,8);

console.log('Menor Nota: ' + menorNota );
console.log('Maior Nota: ' + maiorNota );

var numeroMegaSena; 

var a = [];

for ( x = 0; x < 6 ; x++){
   numeroMegaSena = Math.round(Math.random() * 60);

   a += ['' , numeroMegaSena];

  // console.log(numeroMegaSena);

}

console.log(a);