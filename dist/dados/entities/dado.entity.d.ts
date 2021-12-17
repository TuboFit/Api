import { CreateDadosDto } from "../dto/create-dado.dto";
import { UpdateDadosDto } from "../dto/update-dado.dto";
import { Endereco } from "./endereco.entity";
export declare class Dados {
    readonly id: string;
    nome: string;
    telefone: string;
    cpf: string;
    endereco: Endereco;
    created_at: Date;
    updated_at: Date;
    constructor(dados: CreateDadosDto | UpdateDadosDto);
}
