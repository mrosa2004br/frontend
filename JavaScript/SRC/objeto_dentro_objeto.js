var cliente  = {
    nome : "João",
    idade : 34,
    endereco : { logradouro : " Rua Damares Silva", numero : 66, 
                complemento : "S/N", cidade : "Guarulhos", 
                estado: "SP", cep : "07134-370"}
}

console.log(cliente);

console.log("Endereço do cliente:" + cliente.endereco.logradouro);

cliente.endereco.numero = 76;

console.log(cliente['endereco']);

console.log(cliente['endereco']['logradouro']);

delete cliente.idade;

console.log(cliente);

delete cliente["endereco"];

console.log(cliente);


