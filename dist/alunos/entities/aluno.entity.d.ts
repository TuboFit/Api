import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { CreateAlunoDto } from "../dto/create-aluno.dto";
import { UpdateAlunoDto } from "../dto/update-aluno.dto";
export declare class Aluno {
    readonly id: string;
    peso: number;
    altura: number;
    idade: number;
    imc: number;
    tmb: number;
    genero: number;
    obs: string;
    dados: Dados;
    usuario: Usuario;
    created_at: Date;
    updated_at: Date;
    constructor(aluno: CreateAlunoDto | UpdateAlunoDto);
}
