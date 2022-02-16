import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possível iniciar a aplicação, verifique se o seletor form existe no DOM");
}
