// console.log() para mensagens no console
// alert() para mensagens com popup (pouco utilizado)
// querySelector serve para manipular conteudo no DOM (atravez do document), tanto para tags html/class/id
// variavel.style.backgroundColor e variavel.style.color => mudando estilo direto pelo JS

// var title = document.querySelector('#title');
// title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i],
        peso = paciente.querySelector(".info-peso").textContent,
        altura = paciente.querySelector(".info-altura").textContent,
        imc = peso / (altura * altura),
        pesoTrue = true,
        alturaTrue = true;

    if (peso <= 0 || peso >= 500) {
        console.log("Peso Inválido, preencha corretamente!");
        pesoTrue = false;
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura Inválida, preencha corretamente!");
        alturaTrue = false;
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaTrue && pesoTrue) {
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }
}