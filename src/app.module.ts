import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DadoModule } from './dados/dados.module';
import { ProfessoresModule } from './professores/professores.module';
import { AlunosModule } from './alunos/alunos.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DadoModule,
    ProfessoresModule,
    AlunosModule,
  ]
})
export class AppModule { }
