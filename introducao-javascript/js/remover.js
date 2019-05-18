var tabela = document.querySelector("#tabela-pacientes");

/* console.log(tabela); */

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    
    }, 500);
    
});

/* 
pacientes.forEach(function (paciente){
    
    console.log(paciente);

    paciente.addEventListener("dblclick",function(){
        this.remove();
    });

}); */