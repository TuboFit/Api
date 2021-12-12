"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTMB = exports.setIMC = void 0;
function setIMC(altura, peso) {
    return (peso / (altura * altura)) * 10000;
}
exports.setIMC = setIMC;
function setTMB(altura, peso, idade, genero) {
    if (genero === 1) {
        return (66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade));
    }
    else if (genero === 0) {
        return 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
}
exports.setTMB = setTMB;
//# sourceMappingURL=Alunos.js.map