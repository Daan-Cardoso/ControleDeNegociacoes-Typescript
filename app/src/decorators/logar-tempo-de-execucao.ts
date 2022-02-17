export function logarTempoDeExecucao() {
  return function (
    target: any, // retorna o constructor da classe ou método estático
    propertyKey: string, //nome do método
    descriptor: PropertyDescriptor // Nos dá acesso a implementação do método decorado através de descritor.value.
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...Args: Array<any>) {
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, Args);
      const t2 = performance.now();

      retorno;
      console.log(`${propertyKey}: Tempo de execução ${(t2 - t1) / 1000}s`);
    };
  };
}
