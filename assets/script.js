let choice_number = document.getElementById("number");
let btn = document.getElementById("btn");
let resposta = document.getElementById("rpt");

    // função de verificação do btn "ENTER"
function verificarAcesso() {
    let numero = Number(choice_number.value);

    // limpa estado anterior
    resposta.classList.remove("acesso-ok", "acesso-negado");

    switch (numero) {
        case 1234:
            resposta.textContent = "Acesso Básico";
            resposta.classList.add("acesso-ok");
            break;

        case 5678:
            resposta.textContent = "Acesso Intermediário";
            resposta.classList.add("acesso-ok");
            break;

        case 91011:
            resposta.textContent = "Acesso Administrador";
            resposta.classList.add("acesso-ok");
            break;

        default:
            resposta.textContent = "Acesso Negado";
            resposta.classList.add("acesso-negado");
            break;
    }
}

// Clique no botão
btn.addEventListener("click", verificarAcesso);

// Enter no input
choice_number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        verificarAcesso();
    }
});

// Verificação de Numérico
choice_number.addEventListener("beforeinput", (e) => {
    if (e.data && !/^\d+$/.test(e.data)) {
        e.preventDefault();
    }
});

choice_number.addEventListener("input", () => {
    choice_number.value = choice_number.value.replace(/\D/g, "");
});
