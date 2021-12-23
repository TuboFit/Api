import { Exercicio } from "../entities/exercicios.entity";

export class CreateTreinoDto {
    grupMuscular: string;
    nivel: string;
    crefProfessor: string
    exercicios: Exercicio[]

}
