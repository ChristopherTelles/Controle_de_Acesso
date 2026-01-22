
let choice_number = document.getElementById ("number");
let btn = document.getElementById("btn");
let resposta = document.getElementById("rpt");


btn.addEventListener("click", ()=>{
    let numero = Number(choice_number.value);

    switch (numero){
        case 1234:
            resposta.textContent = "Acesso básico";
            break;

            case 5678:
                resposta.textContent = "Acesso intermediário";
                break;

                case 91011:
                    resposta.textContent = "Acesso administrador";
                    break;
                    case "":
                        resposta.textContent = "adcione seu acesso"
                        break;
                    default:
                        resposta.textContent = "Acesso negado"
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