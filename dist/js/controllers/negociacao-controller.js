import { DiaDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaDaSemana(negociacao.data)) {
            this.mensagemView.update("Somente negociações em dias úteis!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    ehDiaDaSemana(data) {
        return (new Date(data).getDay() > DiaDaSemana.DOMINGO &&
            new Date(data).getDay() < DiaDaSemana.SABADO);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociaçao adicionada com sucesso!");
    }
}
