var botaoForm = document.querySelector('#adicionar-paciente');

botaoForm.addEventListener('click',function(event){
  event.preventDefault();

  var form = document.querySelector('#paciente-form');

  paciente = obtemPaciente(form);
  
   var erros = validaPaciente(paciente); 

  if (erros.length > 0){
    exibeMessagensErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);
  
  form.reset();

  var ul = document.querySelector("#msgErro");

  ul.innerHTML = "";
 
});

function adicionaPacienteNaTabela(paciente){
  
  pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  
  tabela.append(pacienteTr);
  

}

function obtemPaciente(form){

  var paciente = {
    nome : form.nome.value,
    peso : form.peso.value,
    altura : form.altura.value,
    gordura : form.gordura.value,
    resultado : resultadoOMS(calculaImc(form.altura.value, form.peso.value)),
    imc : calculaImc(form.altura.value, form.peso.value) }

  console.log(paciente);

   return paciente;
}

function montaTr(paciente){

  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add("paciente");
  
  pacienteTr.append(montaTd(paciente.nome,'info-nome'));
  pacienteTr.append(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.append(montaTd(paciente.altura,'info-altura'));
  pacienteTr.append(montaTd(paciente.gordura,'info-gordura'));
  pacienteTr.append(montaTd(paciente.imc,'info-imc'));
  pacienteTr.append(montaTd(paciente.resultado,'info-resultado'));

  return pacienteTr;
}

function montaTd( dado, classe){

  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros = [];

  if( paciente.nome.length == 0) erros.push("Nome do paciente é obrigatório!");
  if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");
  if(!validaAltura(paciente.altura)) erros.push("Altura inválido!");
  if( paciente.gordura.length == 0) erros.push("Gordura do paciente é obrigatório!");

  return erros; 
  
}

function exibeMessagensErro(erros){
  var ul = document.querySelector("#msgErro");
  
  ul.innerHTML = "";

  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}