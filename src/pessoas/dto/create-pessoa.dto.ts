import { Contato } from "src/contatos/entities/contato.entity";
import { Endereco } from "src/enderecos/entities/endereco.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreatePessoaDto {
    nome: string;
    cpf: string;
    Contato: Contato[];
    Endereco: Endereco;
    Usuario: Usuario;
}
