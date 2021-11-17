import { forwardRef, Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { enderecoProviders } from './enderecos.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => PessoasModule),
  ],
  controllers: [EnderecosController],
  providers: [
    ...enderecoProviders,
    EnderecosService
  ]
})
export class EnderecosModule { }
