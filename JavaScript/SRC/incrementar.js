
// Closures

function incrementar(){

	var valor = 0;
	
	 return function(){
		return ++valor;

	}
}

var fn = incrementar();

console.log(fn());
console.log(fn());
console.log(fn());

var incremetnar2 = function teste(){

	var valor = 0;
	
	 return function(){
		return ++valor;

	}	
}();

console.log(incremetnar2());
console.log(incremetnar2());
console.log(incremetnar2());