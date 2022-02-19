export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
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
