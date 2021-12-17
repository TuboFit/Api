import { Endereco } from "../entities/endereco.entity";

export class CreateDadosDto {
    nome: string;
    telefone: string;
    cpf: string;
    endereco: Endereco;
}
