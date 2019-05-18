var carro = {
    fabricante : "VW",
    modelo : "FOX",
    cor : "Vermelho"
}

console.log(carro);
console.log(typeof carro);

console.log("Cor do carro: " + carro.cor);

carro.cor = "Preto";
console.log("Carro Pintado:" + carro.cor);

console.log(carro['modelo']);
carro['fabricante'] = 'VolksWagen';
console.log(carro['fabricante']);

// Adicionando novo atributo
carro.placa = 'HHX4813';

console.log(carro);

carro.ligar = function(){
    console.log("Ligando o carro...");
}

console.log(carro);
console.log(carro.ligar());


var carro2 = {
    fabricante : "GM",
    modelo : "Celta",
    cor : "Prata",
    ligar : function(){
        console.log("Ligando o carro:" + this.modelo);
    }
};

console.log(carro2);
console.log(carro2.ligar());



