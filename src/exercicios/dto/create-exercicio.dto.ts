import { Treino } from "src/treinos/entities/treino.entity";

export class CreateExercicioDto {
    nome: string;
    num_repeticoes: string;
    grup_muscular: string;
    carga: string;
    descricao: string;
    treinos: Treino[];
}
