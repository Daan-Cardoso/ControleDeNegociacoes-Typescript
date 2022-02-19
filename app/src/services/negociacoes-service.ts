import Negociacao from "../models/negociacao.js";
import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";

export default class NegociacaoService {
  obterNegociacoesDeHoje(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados", { method: "get" })
      .then((response) => response.json())
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map((dado) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}