import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PessoasModule } from './pessoas/pessoas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { ContatosModule } from './contatos/contatos.module';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TreinosModule } from './treinos/treinos.module';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    PessoasModule,
    EnderecosModule,
    ContatosModule,
    AlunosModule,
    ProfessoresModule,
    UsuariosModule,
    TreinosModule,
    ExerciciosModule,
    AuthModule,
  ]
})
export class AppModule { }
