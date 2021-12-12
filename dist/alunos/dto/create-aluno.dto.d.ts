import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
export declare class CreateAlunoDto {
    peso: number;
    altura: number;
    idade: number;
    genero: number;
    obs: string;
    dados: Dados;
    usuario: Usuario;
}
