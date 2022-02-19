export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any, // retorna o constructor da classe se usado em método estático  ou o prototype da classe caso precise ser instanciada
    propertyKey: string, //nome do método
    descriptor: PropertyDescriptor // Nos dá acesso a implementação do método decorado através de descritor.value.
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      let divisor = 1;
      let tempo = "ms";
      if (emSegundos) {
        divisor = 1000;
        tempo = "s";
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();

      retorno;
      console.log(`${propertyKey}: Tempo de execução ${(t2 - t1) / divisor}${tempo}`);
      return descriptor;
    };
  };
}
