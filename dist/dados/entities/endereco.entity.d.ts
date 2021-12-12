import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { Dados } from "./dado.entity";
export declare class Endereco {
    readonly id: string;
    dados: Dados;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    created_at: Date;
    updated_at: Date;
    constructor(endereco: CreateEnderecoDto);
}
