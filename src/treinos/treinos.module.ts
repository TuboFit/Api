import { Module } from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { TreinosController } from './treinos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { treinoProviders } from './treinos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TreinosController],
  providers: [
    ...treinoProviders,
    TreinosService
  ]
})
export class TreinosModule { }
