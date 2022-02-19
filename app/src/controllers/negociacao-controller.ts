import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import NegociacaoService from "../services/negociacoes-service.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new NegociacaoService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @logarTempoDeExecucao()
  @inspect()
  public adiciona(): void {
    const negociacao = Negociacao.criar(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.ehDiaDaSemana(negociacao.data)) {
      this.mensagemView.update("Somente negociações em dias úteis!");
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limparFormulario();
  }

  public importarDados(): void {
    this.negociacoesService.obterNegociacoesDeHoje().then((negociacoes) => {
      for (let negociacao of negociacoes) {
        this.negociacoes.adiciona(negociacao);
      }

      this.negociacoesView.update(this.negociacoes);
    });
  }

  private ehDiaDaSemana(data: Date): boolean {
    return (
      new Date(data).getDay() > DiaDaSemana.DOMINGO &&
      new Date(data).getDay() < DiaDaSemana.SABADO
    );
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociaçao adicionada com sucesso!");
  }
}
