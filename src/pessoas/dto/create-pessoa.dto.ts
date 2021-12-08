import { Contato } from "src/contatos/entities/contato.entity";
import { Endereco } from "src/enderecos/entities/endereco.entity";

export class CreatePessoaDto {
    nome: string;
    cpf: string;
    Contato: Contato;
    Endereco: Endereco;
}
