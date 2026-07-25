// Pega o nome salvo no cadastro
const nome = localStorage.getItem("nome");

// Procura o lugar onde o nome deve aparecer
const usuario = document.getElementById("username");

// Se existir um nome salvo, mostra ele
if (nome) {
    usuario.textContent = nome;
}


const periodo = document.getElementById("periodo");

periodo.addEventListener("change", function () {
    console.log(periodo.value);
});