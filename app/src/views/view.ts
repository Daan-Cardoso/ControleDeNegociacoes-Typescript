import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export default abstract class View<T> {
  protected elemento: HTMLElement;
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`O seletor ${seletor}, não existe, verifique o DOM`);
    }
  }

  @logarTempoDeExecucao()
  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
