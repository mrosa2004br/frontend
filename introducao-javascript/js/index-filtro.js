var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener('input',function(){
    
    var pacientes = document.querySelectorAll(".paciente");
                                                
    console.log(this.value);
    
    if(this.value.length > 0){
        
        var pesquisa = this.value;

        pacientes.forEach( function(paciente) {

            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(pesquisa,"i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
    
        });

    }else{

        pacientes.forEach( function(paciente){
            paciente.classList.remove("invisivel");
        });

    }

})



