
let choice_number = document.getElementById ("number");
let btn = document.getElementById("btn");
let resposta = document.getElementById("rpt");


btn.addEventListener("click", ()=>{
    let numero = Number(choice_number.value);

    // LIMPA estado anterior
    resposta.classList.remove("acesso-ok", "acesso-negado");

    switch (numero){
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
                        resposta.textContent = "Acesso Negado"
                        resposta.classList.add("acesso-negado");
                        break;
    }

})

// Verificação de Numerico     
    choice_number.addEventListener("beforeinput", (e) => {
    if (e.data && !/^\d+$/.test(e.data)) {
        e.preventDefault();
    }
});


    choice_number.addEventListener("input", () => {
        choice_number.value = choice_number.value.replace(/\D/g, "");
    })