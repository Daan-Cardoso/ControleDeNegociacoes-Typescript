export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...Args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, Args);
            const t2 = performance.now();
            retorno;
            console.log(`${propertyKey}: Tempo de execução ${(t2 - t1) / 1000}s`);
        };
    };
}
