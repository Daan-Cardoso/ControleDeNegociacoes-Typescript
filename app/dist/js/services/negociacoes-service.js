import Negociacao from "../models/negociacao.js";
export default class NegociacaoService {
    obterNegociacoesDeHoje() {
        return fetch("http://localhost:8080/dados", { method: "get" })
            .then((response) => response.json())
            .then((dados) => {
            return dados.map((dado) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
