import { PartialType } from '@nestjs/mapped-types';
import { Treino } from 'src/treinos/entities/treino.entity';
import { CreateExercicioDto } from './create-exercicio.dto';

export class UpdateExercicioDto extends PartialType(CreateExercicioDto) {
    nome: string;
    num_repeticoes: string;
    dia: string;
    carga: string;
    descricao: string;
    treinos: Treino[];
}
