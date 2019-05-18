var botao_adcionar = document.querySelector("#buscar-pacientes");

botao_adcionar.addEventListener('click', function(){
    console.log("Aguarde! Adcionando novos clientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText; 
            console.log(resposta);
            console.log(typeof resposta);

            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach( function( paciente ){
                paciente.resultado = resultadoOMS(paciente.imc);
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
              
    });

    xhr.send();
});