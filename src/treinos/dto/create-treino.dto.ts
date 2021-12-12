import { Exercicio } from "../entities/exercicios.entity";

export class CreateTreinoDto {
    grupMuscular: string;
    dia: string;
    nivel: string;
    exercicios: Exercicio[]

}
