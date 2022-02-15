import { Negociacao } from "./negociacao.js";

export default class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
