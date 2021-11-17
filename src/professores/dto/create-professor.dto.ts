import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateProfessorDto {
    cref: string;
    dados: Pessoa;
    usuario: Usuario;
}
