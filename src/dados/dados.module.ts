import { Module } from '@nestjs/common';
import { DadoService } from './dados.service';
import { DadoController } from './dados.controller';
import { dadosProviders } from './dados.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [DadoController],
  providers: [
    ...dadosProviders,
    DadoService
  ]
})
export class DadoModule { }
