var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for( i = 0 ; i < pacientes.length ; i++ ){

  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");
  var tdResultado = paciente.querySelector(".info-resultado");

  if(validaImc(altura,peso)){
    var imc = calculaImc(altura,peso);
    tdImc.textContent = imc;
    tdResultado.textContent = resultadoOMS(imc);
  }  
  
}

function validaImc(altura,peso){
 
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
 
  if(!pesoValido){
    paciente.classList.add("paciente-invalido");
    tdImc.textContent = "Peso inválido!";
    pesoValido = false;
  }

  if(!alturaValida){
    paciente.classList.add("paciente-invalido");
    tdImc.textContent = "Atura inválida!";
    alturaValida = false;
  }

  if( alturaValida && pesoValido){
    return true;
  }else{
      return false;
  }
}

function calculaImc(altura,peso){
  var imc = peso / ( altura * altura );
  return imc.toFixed(2); 
}

function resultadoOMS(imc){
  var resultadoMSG ;
  if( imc >= 18.5 && imc <= 35 ){
    resultadoMSG = "Seu IMC está excelente!";
  }else if(imc <= 18.5){
    resultadoMSG = "Seu IMC está abaixo do recomendado!";
  }else if(imc > 35){
    resultadoMSG = "Seu IMC está acima do recomendado!";
  }
  return resultadoMSG;
}

function validaPeso(peso){
  if((peso >= 0 && peso <= 300) && ( peso.length > 0 )){
    return true;
  }else{
    return false;
  }

}

function validaAltura(altura){
  if((altura >= 0 && altura <= 2.0) && (altura.length > 0)  ){
    return true;
  }else{
    return false;
  }

}
