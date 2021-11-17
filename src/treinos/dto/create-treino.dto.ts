import { Aluno } from "src/alunos/entities/aluno.entity";
import { Exercicio } from "src/exercicios/entities/exercicio.entity";
import { Professor } from "src/professores/entities/professor.entity";

export class CreateTreinoDto {
    grup_muscular: string;
    dia: string;
    nivel: string;
    dados_aluno: Aluno[];
    dados_professor: Professor;
    exercicios: Exercicio[];
}
