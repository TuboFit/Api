import { PartialType } from '@nestjs/mapped-types';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Exercicio } from 'src/exercicios/entities/exercicio.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { CreateTreinoDto } from './create-treino.dto';

export class UpdateTreinoDto extends PartialType(CreateTreinoDto) {
    grup_muscular: string;
    dia: string;
    nivel: string;
    aluno: Aluno[];
    professor: Professor;
    exercicios: Exercicio[];
}
