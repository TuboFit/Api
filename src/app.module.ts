import { Module } from '@nestjs/common';
import { PessoasModule } from './pessoas/pessoas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { ContatosModule } from './contatos/contatos.module';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TreinosModule } from './treinos/treinos.module';
import { ExerciciosModule } from './exercicios/exercicios.module';



@Module({
  imports: [
    PessoasModule,
    EnderecosModule,
    ContatosModule,
    AlunosModule,
    ProfessoresModule,
    UsuariosModule,
    TreinosModule,
    ExerciciosModule,
  ]
})
export class AppModule { }
