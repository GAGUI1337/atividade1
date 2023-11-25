function verificarPrimo(numero) {
    if (numero <= 1) {
        console.log("O número não é primo, pois é menor ou igual a 1.");
        return;
    } else if (numero === 2) {
        console.log("O número é primo (primeiro número primo).");
        return;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                console.log("O número não é primo.");
                return;
            }
        }
        console.log("O número é primo.");
    }
}

verificarPrimo(17);