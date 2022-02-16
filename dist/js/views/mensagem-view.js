export default class MensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
      <p class="alert alert-primary"> ${model}</p>
    `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
