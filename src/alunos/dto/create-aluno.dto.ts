import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { Treino } from "src/treinos/entities/treino.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateAlunoDto {
    altura: number;
    peso: number;
    genero: string;
    idade: number;
    imc: number;
    tmb: number;
    dados: Pessoa;
    usuario: Usuario;
    treino: Treino[];

}
