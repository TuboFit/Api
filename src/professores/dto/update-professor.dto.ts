import { PartialType } from '@nestjs/mapped-types';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateProfessorDto } from './create-professor.dto';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
    cref: string;
    dados?: Pessoa;
    usuario: Usuario;
}
