import { Modelo } from "../interfaces/modelo.js";
import Negociacao from "./negociacao.js";

export default class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return `
        ${JSON.stringify(this.negociacoes)}
      `;
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
  }
}
