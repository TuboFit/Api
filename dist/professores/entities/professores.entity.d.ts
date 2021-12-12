import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { CreateProfessorDto } from "../dto/create-professore.dto";
import { UpdateProfessorDto } from "../dto/update-professore.dto";
export declare class Professor {
    readonly id: string;
    cref: string;
    dados: Dados;
    usuario: Usuario;
    created_at: Date;
    updated_at: Date;
    constructor(professor: CreateProfessorDto | UpdateProfessorDto);
}
