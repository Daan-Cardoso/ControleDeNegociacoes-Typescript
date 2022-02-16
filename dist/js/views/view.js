export default class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    template(model) {
        throw Error('Este método precisa ser sobrescrito');
    }
}
