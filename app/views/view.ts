export default class View<T> {
  protected elemento: HTMLElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw Error('Este método precisa ser sobrescrito')
  }
}