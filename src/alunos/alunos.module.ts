import { forwardRef, Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { alunoProviders } from './alunos.providers';
import { TreinosModule } from 'src/treinos/treinos.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => PessoasModule),
    forwardRef(() => UsuariosModule),
    forwardRef(() => TreinosModule),
  ],
  controllers: [AlunosController],
  providers: [
    ...alunoProviders,
    AlunosService
  ]
})
export class AlunosModule { }
