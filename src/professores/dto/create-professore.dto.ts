import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateProfessorDto {
    cref: string;
    dados: Dados;
    usuario: Usuario;
}
