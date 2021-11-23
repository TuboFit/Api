import { Aluno } from "src/alunos/entities/aluno.entity";
import { Exercicio } from "src/exercicios/entities/exercicio.entity";
import { Professor } from "src/professores/entities/professor.entity";

export class CreateTreinoDto {
    nivel: string;
    dados_aluno: Aluno[];
    professor: Professor;
    exercicios: Exercicio[];
}
