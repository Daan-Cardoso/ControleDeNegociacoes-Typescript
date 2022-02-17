import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export default abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`O seletor ${seletor}, não existe, verifique o DOM`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  @logarTempoDeExecucao()
  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
