import { PartialType } from '@nestjs/mapped-types';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import { Treino } from 'src/treinos/entities/treino.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateAlunoDto } from './create-aluno.dto';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
    altura: number;
    peso: number;
    genero: string;
    dados: Pessoa;
    treino: Treino[];
}
