import { forwardRef, Module } from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { TreinosController } from './treinos.controller';
import { treinoProviders } from './treinos.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ExerciciosModule } from 'src/exercicios/exercicios.module';
import { AlunosModule } from 'src/alunos/alunos.module';
import { ProfessoresModule } from 'src/professores/professores.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AlunosModule),
    forwardRef(() => ProfessoresModule),
    forwardRef(() => ExerciciosModule),
  ],
  controllers: [TreinosController],
  providers: [
    ...treinoProviders,
    TreinosService
  ]
})
export class TreinosModule { }
