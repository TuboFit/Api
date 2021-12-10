import { PartialType } from '@nestjs/mapped-types';
import { Contato } from 'src/contatos/entities/contato.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreatePessoaDto } from './create-pessoa.dto';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
    nome?: string;
    cpf?: string;
    Contato?: Contato[];
    Endereco?: Endereco;
    Usuario?: Usuario;
}
