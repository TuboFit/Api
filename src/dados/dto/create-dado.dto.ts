import { Endereco } from "../entities/endereco.entity";

export class CreateDadosDto {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco: Endereco;
}
