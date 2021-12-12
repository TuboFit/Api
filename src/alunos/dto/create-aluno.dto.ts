import { Dados } from "src/dados/entities/dado.entity";
import { Treino } from "src/treinos/entities/treino.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateAlunoDto {
    peso: number;
    altura: number;
    idade: number;
    genero: number;
    obs: string;
    dados: Dados;
    usuario: Usuario;
    treinos: Treino[]
}
