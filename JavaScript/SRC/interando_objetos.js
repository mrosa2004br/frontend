var cliente  = {
    nome : "João",
    idade : 34,
    endereco : { logradouro : " Rua Damares Silva", numero : 66, 
                complemento : "S/N", cidade : "Guarulhos", 
                estado: "SP", cep : "07134-370"}
}

for (const key in cliente) {
    console.log(key, ' = ', cliente[key]);
}