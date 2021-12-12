import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
export declare class CreateProfessorDto {
    cref: string;
    dados: Dados;
    usuario: Usuario;
}
