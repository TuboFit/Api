import { forwardRef, Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { pessoaProviders } from './pessoas.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ContatosModule } from 'src/contatos/contatos.module';
import { EnderecosModule } from 'src/enderecos/enderecos.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ContatosModule),
    forwardRef(() => EnderecosModule),
    forwardRef(() => UsuariosModule),
  ],
  controllers: [PessoasController],
  providers: [
    ...pessoaProviders,
    PessoasService
  ]
})
export class PessoasModule { }
