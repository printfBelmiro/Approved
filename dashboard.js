
  const nome = localStorage.getItem("nome");

 const usuario = document.getElementById("username");

// Se existir um nome salvo ele mostra ele
 if (nome) {
usuario.textContent = nome;
}


const periodo = document.getElementById("periodo");

periodo.addEventListener("change", function () {
    console.log(periodo.value);
});


const abrir = document.getElementById("abrirPopup");
const overlay = document.getElementById("overlay");
const cancelar = document.getElementById("cancelar");

abrir.onclick = () => {
    overlay.classList.add("ativo");
}

cancelar.onclick = () => {
    overlay.classList.remove("ativo");
}


const abrirpopup = document.getElementById("abrirPopup");
const addmateria = document.getElementById("addmateria");
const selectMateria = document.getElementById("materiaselect");
const adicionar = document.getElementById("adicionar");
const inputMateria = document.getElementById("novaMateria");

adicionar.onclick = () => {

    const overlay = document.getElementById("overlay");
    const nomeMateria = inputMateria.value;

  const novaOption = document.createElement("option");

 novaOption.textContent = nomeMateria;
                                                                       
    selectMateria.appendChild(novaOption);
 overlay.classList.remove("ativo");  
}