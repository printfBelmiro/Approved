// Procura o botão "Criar Conta"
const botaoCriar = document.querySelector(".criar");

// Quando o usuário clicar no botão...
botaoCriar.addEventListener("click", function () {

    // Impede o botão de recarregar a página
    event.preventDefault();

    // Pega os valores digitados
    const nome = document.querySelector(".nome").value;
    const email = document.querySelector(".email").value;
    const senha = document.querySelector(".senha").value;
    const confirmar = document.querySelector(".confirmar").value;

    // Verifica se todos os campos foram preenchidos
    if(nome === "" || email === "" || senha === "" || confirmar === ""){
        alert("Preencha todos os campos.");
        return;
    }

    // Verifica se as senhas são iguais
    if(senha !== confirmar){
        alert("As senhas são diferentes.");
        return;
    }

    // Salva os dados no computador
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    // Vai para o dashboard
    window.location.href = "dashboard.html";

});