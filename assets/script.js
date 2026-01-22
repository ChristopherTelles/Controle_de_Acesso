
let choice_number = document.getElementById ("number");
let btn = document.getElementById("btn");
let resposta = document.getElementById("rpt");

btn.addEventListener("click", ()=>{
    let numero = Number(choice_number.value);

    switch (numero){
        case 1:
            resposta.textContent = "Acesso básico";
            break;

            case 2:
                resposta.textContent = "Acesso intermediário";
                break;

                case 3:
                    resposta.textContent = "Acesso administrador";
                    break;

                    default:
                        resposta.textContent = "Acesso negado"
                        break;
    }

})