import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
const botaoImportar = document.querySelector("#botaoImportar");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possível iniciar a aplicação, verifique se o seletor form existe no DOM");
}
if (botaoImportar) {
    botaoImportar.addEventListener("click", (e) => {
        controller.importarDados();
    });
}
else {
    throw Error("Botão importar não foi encontrado.");
}
