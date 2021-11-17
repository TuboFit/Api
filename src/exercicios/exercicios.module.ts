import { forwardRef, Module } from '@nestjs/common';
import { ExerciciosService } from './exercicios.service';
import { ExerciciosController } from './exercicios.controller';
import { exercicioProviders } from './exercicios.providers';
import { DatabaseModule } from 'src/database/database.module';
import { TreinosModule } from 'src/treinos/treinos.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => TreinosModule)
  ],
  controllers: [ExerciciosController],
  providers: [
    ...exercicioProviders,
    ExerciciosService
  ]
})
export class ExerciciosModule { }
