// Procura o campo onde o usuário digita o e-mail
const entrar = document.querySelector(".entrar");

// Espera alguma tecla ser pressionada
entrar.addEventListener("keydown", function(event){

    // Se a tecla for Enter...
    if(event.key === "Enter"){

        // Pega o e-mail digitado
        const emailDigitado = entrar.value;

        // Pega o e-mail salvo
        const emailSalvo = localStorage.getItem("email");

        // Compara os dois
        if(emailDigitado === emailSalvo){

            // Entra no dashboard
            window.location.href = "dashboard.html";

        }else{

            // Mostra erro
            alert("Conta não encontrada.");

        }

    }

});