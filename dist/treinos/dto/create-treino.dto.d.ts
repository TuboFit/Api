import { Exercicio } from "../entities/exercicios.entity";
export declare class CreateTreinoDto {
    grupMuscular: string;
    dia: string;
    nivel: string;
    crefProfessor: string;
    exercicios: Exercicio[];
}
