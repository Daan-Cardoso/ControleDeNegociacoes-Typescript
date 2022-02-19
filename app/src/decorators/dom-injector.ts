export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
      }
      return elemento;
    };

    return Object.defineProperty(target, propertyKey, { get: getter });
  };
}
