import { CreateTreinoDto } from "../dto/create-treino.dto";
import { Exercicio } from "./exercicios.entity";
export declare class Treino {
    readonly id: string;
    grupMuscular: string;
    dia: string;
    nivel: string;
    exercicios: Exercicio[];
    constructor(treino: CreateTreinoDto);
}
