export function setIMC(altura: number, peso: number): number {
    return (peso / (altura * altura)) * 10000;
}

export function setTMB(altura: number, peso: number, idade: number, genero: number): number {
    if (genero === 1) {
        return (66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade))
    } else if (genero === 0) {
        return 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)
    }
}