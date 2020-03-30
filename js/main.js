// console.log() para mensagens no console
// alert() para mensagens com popup (pouco utilizado)
// querySelector serve para manipular conteudo no DOM (atravez do document), tanto para tags html/class/id

// var title = document.querySelector('#title');
// title.textContent = "Aparecida Nutricionista";

var firstPaciente = document.querySelector("#primeiro-paciente"),
    peso = firstPaciente.querySelector(".info-peso").textContent,
    altura = firstPaciente.querySelector(".info-altura").textContent,
    imc = peso / (altura * altura),
    pesoTrue = true,
    alturaTrue = true

if (peso <= 0 || peso >= 500) {
    console.log("Peso Inválido, preencha corretamente!");
    pesoTrue = false;
    firstPaciente.querySelector(".info-imc").textContent = "Peso inválido";
}
if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválida, preencha corretamente!");
    alturaTrue = false;
    firstPaciente.querySelector(".info-imc").textContent = "Altura inválida";
}

if (alturaTrue && pesoTrue) {
    firstPaciente.querySelector(".info-imc").textContent = imc;
}