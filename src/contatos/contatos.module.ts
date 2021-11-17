import { forwardRef, Module } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { contatoProviders } from './contatos.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => PessoasModule)
  ],
  controllers: [ContatosController],
  providers: [
    ...contatoProviders,
    ContatosService
  ]
})
export class ContatosModule { }
