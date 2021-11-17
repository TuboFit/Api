import { PartialType } from '@nestjs/mapped-types';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateProfessorDto } from './create-professor.dto';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
    cref: string;
    usuario: Usuario;
}
